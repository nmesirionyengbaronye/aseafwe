import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, ArrowDown, ArrowRight, Twitter, Download, Linkedin } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import profileImg from "@/assets/profile.jpg";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import buildCv from "@/lib/buildCv";
import LiveVisitors from "@/components/LiveVisitors";

const socials = [
  { icon: Github, href: site.social.github, label: "GitHub" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.social.x, label: "X" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

const roles = [
  "AI & Mechatronics Engineer",
  "AI Application Builder",
  "Frontend Developer",
  "API Engineer",
  "Robotics Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [generating, setGenerating] = useState(false);

  const handleDownloadCV = useCallback(async () => {
    if (generating) return;
    setGenerating(true);
    try {
      await buildCv();
    } catch (error) {
      console.error("CV generation failed:", error);
    } finally {
      setGenerating(false);
    }
  }, [generating]);

  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden"
    >
      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Real presence count. Renders nothing when unconfigured. */}
      <LiveVisitors />

      {/* Side socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex fixed left-8 bottom-0 flex-col items-center gap-5 z-40"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Icon size={18} />
          </a>
        ))}
        <div className="w-px h-24 bg-muted-foreground/40" />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
        <div className="flex-1">
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
            Nmesirionye Ngbaronye.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-16 md:h-20 mt-2 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground text-lg max-w-xl mt-6 leading-relaxed"
          >
            A Mechatronics Engineering undergraduate at the Federal University of Technology,
            Owerri. I build applied AI systems and the web platforms that ship them —
            from NLP pipelines and retrieval infrastructure through to the
            interfaces that put them in front of people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-7 py-4 rounded hover:bg-primary/10 transition-colors"
            >
              Check out my work
              <ArrowDown size={16} />
            </Link>
            <button
              onClick={handleDownloadCV}
              data-cv-download
              disabled={generating}
              className="inline-flex items-center gap-2 font-mono text-sm bg-primary text-primary-foreground px-7 py-4 rounded hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-wait"
            >
              <Download size={16} />
              {generating ? "Preparing…" : "Download CV"}
            </button>
            <Link
              to="/work/rie"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-transparent px-7 py-4 rounded hover:border-primary/40 transition-colors"
            >
              See the hackathon build<ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Interactive profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="relative shrink-0"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: "dashed" }}
            />
            <motion.div
              className="absolute -inset-3 rounded-full border border-primary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: "dotted" }}
            />
            <img
              src={profileImg}
              alt="Nmesirionye Ngbaronye - AI &amp; Mechatronics Engineer"
              className="relative rounded-full w-full h-full object-cover object-top border-4 border-primary/30 shadow-[var(--shadow-glow)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
