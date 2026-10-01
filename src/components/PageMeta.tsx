import { useEffect } from "react";
import { editorialDirectory, workCases } from "@/lib/portfolioContent";
import { site } from "@/lib/site";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  /** Optional image override for social cards. */
  image?: string;
};

const setOrCreate = <T extends HTMLMetaElement | HTMLLinkElement>(selector: string, attr: string, value: string) => {
  const element = document.head.querySelector<T>(selector);
  if (element) {
    element.setAttribute("content", value);
    return element;
  }
  const created = document.createElement("meta");
  created.setAttribute(attr, value);
  document.head.appendChild(created);
  return created as T;
};

/**
 * Per-route document head.
 *
 * Sets title, description, canonical, Open Graph and Twitter card tags, and
 * keeps the one-time author/robots/verification tags from index.html intact
 * by only touching the keys this site manages.
 */
const PageMeta = ({ title, description, path, image }: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = title === site.role ? `${site.name} — ${title}` : `${title} — ${site.name}`;
    const canonicalUrl = `${site.baseUrl}${path === "/" ? "/" : path}`;

    document.title = fullTitle;

    setOrCreate('meta[name="description"]', "name", description);

    // Open Graph
    setOrCreate('meta[property="og:type"]', "property", "website");
    setOrCreate('meta[property="og:site_name"]', "property", site.name);
    setOrCreate('meta[property="og:locale"]', "property", "en_NG");
    setOrCreate('meta[property="og:title"]', "property", fullTitle);
    setOrCreate('meta[property="og:description"]', "property", description);
    setOrCreate('meta[property="og:url"]', "property", canonicalUrl);
    if (image) setOrCreate('meta[property="og:image"]', "property", image);

    // Twitter
    setOrCreate('meta[name="twitter:card"]', "name", "summary_large_image");
    setOrCreate('meta[name="twitter:title"]', "name", fullTitle);
    setOrCreate('meta[name="twitter:description"]', "name", description);
    setOrCreate('meta[name="twitter:site"]', "name", "@nmesirionye_n");
    setOrCreate('meta[name="twitter:creator"]', "name", "@nmesirionye_n");
    if (image) setOrCreate('meta[name="twitter:image"]', "name", image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, image, path, title]);

  return null;
};

/**
 * Structured data for search engines. Mounted once on the home route:
 * Person + WebSite nodes describing who this is and what the site contains.
 */
export const StructuredData = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.portfolio = "true";

    const person = {
      "@type": "Person",
      "@id": `${site.baseUrl}/#person`,
      name: site.name,
      url: site.baseUrl,
      email: `mailto:${site.email}`,
      image: `${site.baseUrl}/og-image.png`,
      jobTitle: site.role,
      description:
        "AI and Mechatronics Engineer building applied AI systems and web platforms, and a Mechatronics Engineering undergraduate at the Federal University of Technology, Owerri. Building UniUI, an academic intelligence system built around sources, retrieval and verification.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Owerri",
        addressRegion: "Imọ State",
        addressCountry: "NG",
      },
      sameAs: Object.values(site.social),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Federal University of Technology, Owerri",
        url: "https://futo.edu.ng",
      },
      knowsAbout: [
        "Frontend Development",
        "API Engineering",
        "Artificial Intelligence",
        "Natural Language Processing",
        "Mechatronics Engineering",
        "Robotics",
      ],
      award: [
        {
          "@type": "Award",
          name: "Creativity Recognition — Hack-Nation Global AI Hackathon #6",
          date: "2026-07-19",
          url: `${site.baseUrl}/achievements`,
        },
      ],
    };

    const website = {
      "@type": "WebSite",
      "@id": `${site.baseUrl}/#website`,
      url: site.baseUrl,
      name: `${site.name} — Portfolio`,
      description: "Portfolio, project case studies, timeline and engineering notes.",
      inLanguage: "en-NG",
      publisher: { "@id": `${site.baseUrl}/#person` },
    };

    const itemList = {
      "@type": "ItemList",
      name: "Projects",
      numberOfItems: workCases.length,
      itemListElement: workCases.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${site.baseUrl}/work/${project.slug}`,
      })),
    };

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [person, website, itemList],
    });

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export const pageCount = editorialDirectory.length + workCases.length;

export default PageMeta;