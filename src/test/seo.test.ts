import { describe, expect, it } from "vitest";
import { buildRobots, buildSitemap, allPaths } from "@/lib/seo";
import { site } from "@/lib/site";
import { editorialDirectory, workCases } from "@/lib/portfolioContent";

describe("seo helpers", () => {
  it("covers every registered page and project in the sitemap", () => {
    const sitemap = buildSitemap("2026-01-01");

    expect(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(sitemap).toContain("<urlset");
    expect(sitemap.trimEnd()).toMatch(/<\/urlset>$/);

    editorialDirectory.forEach((entry) => {
      expect(sitemap).toContain(`${site.baseUrl}${entry.path}`);
    });

    workCases.forEach((project) => {
      expect(sitemap).toContain(`${site.baseUrl}/work/${project.slug}`);
    });

    expect(sitemap).toContain(`<loc>${site.baseUrl}/</loc>`);
    expect((sitemap.match(/<url>/g) ?? []).length).toBe(allPaths.length);
  });

  it("uses the configured production domain, not a preview host", () => {
    const sitemap = buildSitemap();

    expect(sitemap).toContain("nmesirionye.ngbaronye.com");
    expect(sitemap).not.toContain("lovable.app");
  });

  it("advertises the sitemap in robots.txt and allows crawling", () => {
    const robots = buildRobots();

    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
    expect(robots).toContain(`Sitemap: ${site.baseUrl}/sitemap.xml`);
  });
});