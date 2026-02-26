import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <motion.nav
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border"
  >
    <a href="#" className="font-mono text-primary text-sm font-bold tracking-wider">
      NN<span className="text-muted-foreground">.</span>
    </a>
    <div className="flex items-center gap-6">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hidden md:block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
        >
          {link.label}
        </a>
      ))}
      <a
        href="#contact"
        className="text-xs font-mono border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors"
      >
        Get In Touch
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
