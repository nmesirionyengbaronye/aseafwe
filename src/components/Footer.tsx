import { Github, Twitter, Mail, Linkedin, BookOpen, Newspaper, Code2 } from "lucide-react";
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

const pages = [
  ["About", "/about"], ["Work", "/work"], ["Skills", "/skills"],
  ["Awards", "/achievements"], ["Writing", "/writing"], ["Contact", "/contact"],
];


const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
      <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs" aria-label="Footer navigation">
        {pages.map(([label, href]) => <Link key={href} to={href} className="text-muted-foreground hover:text-primary transition-colors">{label}</Link>)}
      </nav>
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
      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built by{" "}
        <span className="text-primary/80">Nmesirionye Ngbaronye</span>
      </p>
    </div>
  </footer>
);

export default Footer;
