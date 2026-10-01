import { describe, expect, it } from "vitest";
import { site } from "@/lib/site";

describe("presence configuration", () => {
  it("reports presence as disabled when no backend env vars are set", () => {
    // In the test environment VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are
    // absent, so the badge must resolve to disabled and the UI renders nothing.
    const configured = Boolean(
      import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY,
    );

    expect(site.presence.enabled).toBe(configured);
    expect(configured).toBe(false);
  });

  it("states the privacy position in user-facing language", () => {
    expect(site.presence.privacy.toLowerCase()).toContain("anonymous");
    expect(site.presence.privacy.toLowerCase()).toContain("no device");
  });

  it("never claims to collect personal data", () => {
    const privacy = site.presence.privacy.toLowerCase();
    expect(privacy).not.toMatch(/collects? (your )?(ip|device id|imei|fingerprint)\b/);
  });
});