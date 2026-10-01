import { Github, Twitter, Mail, Linkedin, BookOpen, Newspaper, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";

const socials = [
  { icon: Github, href: site.social.github, label: "GitHub" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.social.x, label: "X" },
  { icon: Code2, href: site.social.hashnode, label: "Hashnode" },
  { icon: Newspaper, href: site.social.medium, label: "Medium" },
  { icon: BookOpen, href: site.social.devto, label: "DEV Community" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

const sitemapColumns = [
  {
    heading: "Portfolio",
    links: [
      ["Home", "/"],
      ["About", "/about"],
      ["Work", "/work"],
      ["Skills", "/skills"],
      ["Contact", "/contact"],
    ],
  },
  {
    heading: "Record",
    links: [
      ["Now", "/now"],
      ["Timeline", "/timeline"],
      ["Education", "/education"],
      ["Philosophy", "/philosophy"],
      ["Legacy", "/legacy"],
    ],
  },
  {
    heading: "More",
    links: [
      ["Achievements", "/achievements"],
      ["Writing", "/writing"],
      ["Press", "/press"],
      ["Uses", "/uses"],
      ["Graveyard", "/work/graveyard"],
      ["Search", "/search"],
    ],
  },
];

const Footer = () => (
  <footer className="py-14 border-t border-border">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <Link to="/" className="font-mono text-primary text-sm font-bold tracking-wider">
            Nmesirionye Ngbaronye<span className="text-muted-foreground">.</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
            AI and Mechatronics Engineer. Mechatronics undergraduate at FUTO, building UniUI and documenting the work in public.
          </p>
          <a
            href={site.journalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-primary mt-5 hover:text-primary/80"
          >
            Read the journal<ExternalLink size={13} />
          </a>
        </div>

        {sitemapColumns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="font-mono text-xs text-primary mb-4">{column.heading.toUpperCase()}</h2>
            <ul className="flex flex-col gap-2.5">
              {column.links.map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <div className="h-px w-16 bg-primary/20" />
        <p className="font-mono text-xs text-muted-foreground text-center">
          Designed &amp; Built by <span className="text-primary/80">Nmesirionye Ngbaronye</span> · Updated{" "}
          <time dateTime={site.lastUpdated}>{site.lastUpdated}</time>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;