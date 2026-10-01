import { describe, expect, it } from "vitest";
import { workCases, primaryNav } from "@/lib/portfolioContent";
import { site } from "@/lib/site";

describe("portfolio content", () => {
  it("gives every project a unique slug", () => {
    const slugs = workCases.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has real case study content on every project rather than empty placeholders", () => {
    workCases.forEach((project) => {
      expect(project.problem.length).toBeGreaterThan(40);
      expect(project.solution.length).toBeGreaterThan(40);
      expect(project.overview.length).toBeGreaterThan(40);
      expect(project.role.length).toBeGreaterThan(0);
      expect(["Shipped", "Building", "Early concept"]).toContain(project.status);
    });
  });

  it("never presents an unconfirmed date as a period", () => {
    workCases.forEach((project) => {
      // period is null or a real string — never an empty or placeholder value.
      if (project.period === null) {
        expect(project.periodNote).toBeTruthy();
      } else {
        expect(project.period.trim().length).toBeGreaterThan(0);
      }
    });
  });

  it("marks shipped projects with evidence: a live URL or a repository", () => {
    workCases
      .filter((project) => project.status === "Shipped")
      .forEach((project) => {
        expect(Boolean(project.live || project.source)).toBe(true);
      });
  });

  it("keeps early concepts free of fake links", () => {
    workCases
      .filter((project) => project.status === "Early concept")
      .forEach((project) => {
        expect(project.live).toBeUndefined();
        expect(project.source).toBeUndefined();
      });
  });

  it("uses the production domain and the AI & Mechatronics positioning", () => {
    expect(site.baseUrl).toBe("https://nmesirionye.ngbaronye.com");
    expect(site.role).toBe("AI & Mechatronics Engineer");
  });

  it("exposes the primary navigation the portfolio needs", () => {
    const paths = primaryNav.map((link) => link.href);
    expect(paths).toContain("/now");
    expect(paths).toContain("/timeline");
    expect(paths).toContain("/work");
  });

  it("features exactly three projects for the home page", () => {
    expect(workCases.filter((project) => project.featured).length).toBe(3);
  });
});