import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, X, Radio } from "lucide-react";
import { useLocation } from "react-router-dom";
import { site } from "@/lib/site";
import { usePresence } from "@/hooks/usePresence";

/** Human label for the route a visitor is on. */
const routeLabel = (path: string) => {
  if (path === "/" || path === "") return "Home";
  const segment = path.split("/").filter(Boolean);
  if (!segment.length) return "Home";
  const [head, ...rest] = segment;
  const label = head.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  return rest.length ? `${label} › ${rest.join("/")}` : label;
};

/**
 * Live visitor badge.
 *
 * Renders only when presence is actually connected. If the Supabase env vars
 * are missing or the channel errors, nothing is shown — a visitor counter
 * that invents a number is worse than no counter at all.
 */
const LiveVisitors = () => {
  const { pathname } = useLocation();
  const { count, visitors, status } = usePresence(pathname);
  const [open, setOpen] = useState(false);

  if (status === "unconfigured" || status === "error") return null;

  const live = status === "live";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="fixed top-20 right-6 md:right-12 z-40"
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={
            live
              ? `${count} ${count === 1 ? "person is" : "people are"} on the site right now`
              : "Connecting to the presence service"
          }
          className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 hover:border-primary/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            {live && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                live ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
          </span>
          {live ? (
            <Users size={14} className="text-muted-foreground" />
          ) : (
            <Radio size={14} className="text-muted-foreground" />
          )}
          <span className="font-mono text-xs text-muted-foreground">
            {live ? `${count} here now` : "connecting"}
          </span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && live && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-6 md:right-12 z-40 w-64 rounded-lg border border-border bg-card/95 backdrop-blur-lg p-4 shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-[10px] text-primary">LIVE ON THIS SITE</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close visitor list"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {visitors.length === 0 ? (
              <p className="text-sm text-muted-foreground">No one is here right now.</p>
            ) : (
              <ul className="flex flex-col gap-2 max-h-56 overflow-y-auto">
                {visitors.map((visitor, index) => (
                  <li key={visitor.id} className="flex items-center justify-between gap-3 text-xs">
                    <span className="flex items-center gap-2 text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="truncate">
                        {index === 0 ? "You" : "Anonymous visitor"}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground shrink-0">
                      {routeLabel(visitor.path)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <p className="font-mono text-[10px] text-muted-foreground mt-4 pt-3 border-t border-border leading-relaxed">
              {site.presence.privacy}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveVisitors;