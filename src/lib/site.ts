/**
 * `import.meta.env` is populated by Vite in the app and test environments, but
 * is undefined when this module is imported from `vite.config.ts` at
 * config-load time (to generate the sitemap). Guard so both work.
 */
const env = (typeof import.meta !== "undefined" && import.meta.env
  ? import.meta.env
  : {}) as Record<string, string | undefined>;

export const site = {
  name: "Nmesirionye Ngbaronye",
  /** Primary positioning used across the hero, meta tags and CV. */
  role: "AI & Mechatronics Engineer",
  /** Secondary descriptor for about/press surfaces where the dual nature helps. */
  roleLong: "AI & Mechatronics Engineer",
  discipline: "Mechatronics Engineering",
  baseUrl: env.VITE_SITE_URL ?? "https://nmesirionye.ngbaronye.com",
  journalUrl: "https://nmesirionyejournal.ngbaronye.com",
  email: "nmesirionyengbaronye@gmail.com",
  whatsapp: "07040369525",
  location: "Owerri / Umuahia, Nigeria",
  origin: "Umuahia, Abia State, Nigeria",
  /** Last substantive content review. Surfaced on the footer and /now. */
  lastUpdated: "2026-10-01",
  availability: {
    status: "Open to opportunities",
    detail:
      "Taking on freelance frontend and API work, and open to full-time roles and serious collaborations from 2027.",
  },
  /**
   * Anonymous, per-tab presence. No personal data is collected — see
   * `src/hooks/usePresence.ts` for what is and is not transmitted.
   */
  presence: {
    enabled: Boolean(env.VITE_SUPABASE_URL && env.VITE_SUPABASE_ANON_KEY),
    /** Shown in the badge tooltip and the visitor list footer. */
    privacy:
      "Anonymous session ids, discarded when each tab closes. No device or personal data is collected.",
  },
  social: {
    github: "https://github.com/nmesrionyengbaronye",
    linkedin: "https://www.linkedin.com/in/ngbaronye-nmesirionye-31339b410/",
    x: "https://x.com/nmesirionye_n",
    hashnode: "https://hashnode.com/@nmesirionyengbaronye",
    medium: "https://medium.com/@nmesirionyengbaronye",
    devto: "https://dev.to/nmesirionyengbaronye",
  },
} as const;