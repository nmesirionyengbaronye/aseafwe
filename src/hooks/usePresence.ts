import { useCallback, useEffect, useRef, useState } from "react";
import type { RealtimeChannel, SupabaseClient } from "@supabase/supabase-js";

/**
 * Live visitor presence.
 *
 * What this is:
 *  - Each open tab joins a shared presence channel and is counted.
 *  - Identity is a random UUID in `sessionStorage`, so it dies when the tab
 *    closes and is never written anywhere durable.
 *
 * What this deliberately is NOT:
 *  - No IP addresses, no user agents, no device fingerprints, no canvas or
 *    hardware identifiers, nothing persisted server-side, no cross-site
 *    tracking. The presence payload carries only a session id and a path.
 *
 * Fingerprinting a visitor to identify their device across sessions would
 * require storing personal data for consent, is unreliable in practice, and
 * is not something this site should do.
 *
 * Requires `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Without them the
 * hook reports `status: "unconfigured"` and consumers must render nothing
 * rather than invent a number.
 */

export type PresenceState = "unconfigured" | "connecting" | "live" | "error";

export type Visitor = {
  /** Random per-tab id. Useless for identifying a person, on purpose. */
  id: string;
  /** Route the visitor is currently on. */
  path: string;
  /** When this tab joined, ISO timestamp. */
  joinedAt: string;
};

export type Presence = {
  count: number;
  visitors: Visitor[];
  status: PresenceState;
};

const CHANNEL = "portfolio-visitors";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * A random id per tab. `sessionStorage` (not `localStorage`) is the correct
 * scope: it is cleared when the tab closes, so it can never become a durable
 * identifier for a returning visitor.
 */
const getSessionId = () => {
  const key = "portfolio-presence-id";
  try {
    const existing = sessionStorage.getItem(key);
    if (existing) return existing;
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `anon-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
    sessionStorage.setItem(key, id);
    return id;
  } catch {
    // Storage blocked (private mode): fall back to a per-load id, which
    // still counts correctly for the lifetime of this page.
    return `anon-${Math.random().toString(36).slice(2)}`;
  }
};

/**
 * Tracks who is on the site right now.
 *
 * @param path Route the visitor is on, so the reported route follows
 *             client-side navigation instead of only counting page loads.
 */
export const usePresence = (path = "/"): Presence => {
  const [presence, setPresence] = useState<Presence>({
    count: 0,
    visitors: [],
    status: isConfigured ? "connecting" : "unconfigured",
  });

  const clientRef = useRef<SupabaseClient | null>(null);
  const channelRef = useRef<RealtimeChannel | null>(null);
  const joinedAtRef = useRef(new Date().toISOString());
  const sessionIdRef = useRef<string>("");
  const pathRef = useRef(path);
  pathRef.current = path;

  /** Broadcasts this tab's current route without disturbing the count. */
  const publishPath = useCallback(async () => {
    const channel = channelRef.current;
    if (!channel || !sessionIdRef.current) return;
    try {
      await channel.track({
        id: sessionIdRef.current,
        path: pathRef.current,
        joined_at: joinedAtRef.current,
      });
    } catch {
      // Route reporting is a nice-to-have; the count stays correct without it.
    }
  }, []);

  useEffect(() => {
    if (!isConfigured || !supabaseUrl || !supabaseAnonKey) return;

    let disposed = false;
    const sessionId = getSessionId();
    sessionIdRef.current = sessionId;

    const start = async () => {
      try {
        // Dynamic import keeps the realtime client off the critical path.
        const { createClient } = await import("@supabase/supabase-js");
        if (disposed) return;

        const client = createClient(supabaseUrl, supabaseAnonKey, {
          auth: { persistSession: false, autoRefreshToken: false },
          realtime: { params: { eventsPerSecond: 10 } },
        });
        clientRef.current = client;

        const channel = client
          .channel(CHANNEL, { config: { presence: { key: sessionId } } })
          .on("presence", { event: "sync" }, () => {
            if (disposed) return;

            const state = channel.presenceState() ?? {};

            const visitors: Visitor[] = Object.entries(state)
              .flatMap(([key, entries]) =>
                entries.map((entry) => {
                  const meta = entry as unknown as {
                    path?: string;
                    joined_at?: string;
                  };
                  return {
                    id: key,
                    path: meta.path ?? "/",
                    joinedAt: meta.joined_at ?? joinedAtRef.current,
                  };
                }),
              )
              .sort((a, b) => a.joinedAt.localeCompare(b.joinedAt));

            setPresence({ count: visitors.length, visitors, status: "live" });
          })
          .subscribe((status) => {
            if (status === "SUBSCRIBED") void publishPath();
            if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
              if (!disposed) {
                setPresence((prev) => ({ ...prev, status: "error" }));
              }
            }
          });

        channelRef.current = channel;
      } catch (error) {
        console.error("Presence connection failed:", error);
        if (!disposed) {
          setPresence((prev) => ({ ...prev, status: "error" }));
        }
      }
    };

    void start();

    return () => {
      disposed = true;
      const channel = channelRef.current;
      if (channel) {
        // Stop heartbeats before closing so this tab drops out of the count
        // immediately instead of lingering until a server-side timeout.
        void channel.untrack().catch(() => {});
        void clientRef.current?.removeChannel(channel).catch(() => {});
      }
      channelRef.current = null;
      clientRef.current = null;
    };
  }, [publishPath]);

  // Follow client-side navigation without re-subscribing.
  useEffect(() => {
    void publishPath();
  }, [path, publishPath]);

  return presence;
};

export default usePresence;