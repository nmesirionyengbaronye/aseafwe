import { editorialDirectory, workCases } from "./portfolioContent";
import { site } from "./site";

/**
 * Single source of truth for URLs. The sitemap, structured data, footer
 * sitemap and internal cross-links all read from here, so a new route only
 * has to be registered in `editorialDirectory` once.
 *
 * Imported with relative paths rather than the `@/` alias because
 * `vite.config.ts` runs this module at config-load time, before the alias
 * is registered.
 */
export const staticPaths = ["", ...editorialDirectory.map((entry) => entry.path)];

export const projectPaths = workCases.map((project) => `/work/${project.slug}`);

export const allPaths = Array.from(new Set([...staticPaths, ...projectPaths]));

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/** Absolute URL for a route, with the root canonicalised to a trailing slash. */
export const urlFor = (path: string) => `${site.baseUrl}${path === "" ? "/" : path}`;

/** Route -> index.html title/description overrides for the sitemap. */
const metaFor = (path: string): { title: string; description: string; priority: string; changefreq: string } => {
  if (path === "") {
    return {
      title: `${site.name} — ${site.role}`,
      description:
        "Portfolio of Nmesirionye Ngbaronye: AI and Mechatronics Engineer, Mechatronics Engineering undergraduate at FUTO, Owerri. Project case studies, timeline, and engineering notes.",
      priority: "1.0",
      changefreq: "weekly",
    };
  }

  if (path.startsWith("/work/") && path !== "/work/graveyard") {
    const project = workCases.find((item) => `/work/${item.slug}` === path);
    if (project) {
      return {
        title: `${project.title} — ${site.name}`,
        description: project.summary,
        priority: project.featured ? "0.9" : "0.7",
        changefreq: "monthly",
      };
    }
  }

  const entry = editorialDirectory.find((item) => item.path === path);
  if (entry) {
    return {
      title: `${entry.title} — ${site.name}`,
      description: entry.description,
      priority: ["/work", "/now", "/about"].includes(path) ? "0.9" : "0.6",
      changefreq: "monthly",
    };
  }

  return {
    title: `${site.name}`,
    description: "Portfolio page.",
    priority: "0.5",
    changefreq: "monthly",
  };
};

/** Full XML sitemap covering every route including all project case studies. */
export const buildSitemap = (lastmod: string = site.lastUpdated) => {
  const urls = allPaths
    .map((path) => {
      const meta = metaFor(path);
      return [
        "  <url>",
        `    <loc>${escapeXml(urlFor(path))}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${meta.changefreq}</changefreq>`,
        `    <priority>${meta.priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

export const buildRobots = () =>
  [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    `Sitemap: ${site.baseUrl}/sitemap.xml`,
    "",
  ].join("\n");