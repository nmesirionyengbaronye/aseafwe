import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20" style={{ background: "var(--gradient-hero)" }}>
    {/* Side social links */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="hidden md:flex fixed left-8 bottom-0 flex-col items-center gap-5 z-40"
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
          <Icon size={18} />
        </a>
      ))}
      <div className="w-px h-24 bg-muted-foreground/40" />
    </motion.div>

    <div className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-primary text-sm mb-5"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
      >
        Ngbaronye Nmesirionye.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground leading-tight mt-2"
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-muted-foreground text-lg max-w-xl mt-6 leading-relaxed"
      >
        I'm a frontend & API developer specializing in crafting exceptional digital experiences.
        I focus on building accessible, performant, and beautifully designed web applications & robust APIs.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        href="#projects"
        className="inline-flex items-center gap-2 mt-10 font-mono text-sm border border-primary text-primary px-7 py-4 rounded hover:bg-primary/10 transition-colors"
      >
        Check out my work
        <ArrowDown size={16} />
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
