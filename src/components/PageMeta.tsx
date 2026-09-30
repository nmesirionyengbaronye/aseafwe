import { useEffect } from "react";
import { site } from "@/lib/site";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
};

const setMeta = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute("content", content);
};

const PageMeta = ({ title, description, path }: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = `${title} — ${site.name}`;
    const canonicalUrl = `${site.baseUrl}${path}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, path, title]);

  return null;
};

export default PageMeta;
