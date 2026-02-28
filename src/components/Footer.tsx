import { Github, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Panther0508" },
  { icon: Twitter, href: "https://x.com/Pantherlord0508" },
  { icon: Mail, href: "mailto:nmesirionyengbaronye@gmail.com" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
      <div className="flex gap-5">
        {socials.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <div className="h-px w-16 bg-primary/20" />
      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built by{" "}
        <span className="text-primary/80">Ngbaronye Nmesirionye</span>
      </p>
    </div>
  </footer>
);

export default Footer;
