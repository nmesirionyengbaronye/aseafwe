import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, ArrowDown, Twitter, Download, Eye } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/Panther0508", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/Pantherlord0508", label: "X" },
  { icon: Mail, href: "mailto:nmesirionyengbaronye@gmail.com", label: "Email" },
];

const roles = [
  "Frontend Developer",
  "API Engineer",
  "UI/UX Enthusiast",
  "Robotics Enthusiast",
  "Open Source Contributor",
];

const generateCV = () => {
  const cvContent = `
NGBARONYE NMESIRIONYE
Frontend & API Developer
=======================================

CONTACT
  Email: nmesirionyengbaronye@gmail.com
  Phone: 07040369525
  GitHub: github.com/Panther0508
  X/Twitter: x.com/Pantherlord0508

PROFILE
  Passionate frontend and API developer with 2+ years of experience building
  accessible, performant, and beautifully designed web applications and robust APIs.
  Currently studying Computer Science at the Federal University of Technology, Owerri (FUTO).
  Originally from Umuahia, Abia State, Nigeria.

EDUCATION
  Federal University of Technology, Owerri (FUTO)
  B.Eng Mechatronics Engineering (In Progress)

SKILLS
  Frontend: React, TypeScript, Tailwind CSS, Next.js, HTML/CSS, Framer Motion
  API & Backend: Node.js, Express, REST APIs, GraphQL, PostgreSQL, MongoDB, Python
  Tools & DevOps: Git, Docker, CI/CD, Vite, Figma, Postman
  Robotics: Arduino, Raspberry Pi, Embedded C, Sensors & Actuators

PROJECTS
  MarketAI API
    An elite market intelligence dashboard with real-time data streams and AI-powered analytics.
    Tech: React, TypeScript, API, AI
    Live: market-trend-ai.onrender.com
    GitHub: github.com/Panther0508/Market-Trend-AI

  Developer News Dashboard
    A centralized news aggregation dashboard for developers with real-time tech updates.
    Tech: React, TypeScript, API, News Aggregation
    Live: developer-news-dashboard.onrender.com
    GitHub: github.com/Panther0508/Developer-News-Dashboard

  E-Library
    A digital library application for browsing, searching, and managing books online.
    Tech: React, TypeScript, Tailwind CSS
    Live: e-library-panther0508.vercel.app
    GitHub: github.com/Panther0508/E-library

  Emotional Support Model
    An AI-powered emotional support chatbot using NLP for empathetic responses.
    Tech: Python, NLP, Machine Learning, AI
    Live: emotional-support-model-1.onrender.com
    GitHub: github.com/Panther0508/Emotional-Support-Model

  IntentScope
    A data exploration and interactive code execution platform for API development.
    Tech: Python, API, Data Science, NLP
    Live: intentscope.pxxl.click
    GitHub: github.com/Panther0508/IntentScope

  AI Resume Analyzer
    A resume screening tool for employers with intelligent scoring and filtering.
    Tech: Python, API, NLP, Full-Stack
    Live: ai-resume-analyzer-7ubo.onrender.com
    GitHub: github.com/Panther0508/Ai-resume-analyzer

INTERESTS
  Robotics, open-source contribution, system design, cloud architecture, new technologies
  `;
  const blob = new Blob([cvContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Ngbaronye_Nmesirionye_CV.txt";
  a.click();
  URL.revokeObjectURL(url);
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setViewerCount(Math.floor(Math.random() * 8) + 3);
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(2, Math.min(15, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = useCallback(() => {
    generateCV();
  }, []);

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

      {/* Live viewers badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="fixed top-20 right-6 md:right-12 z-40 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <Eye size={14} className="text-muted-foreground" />
        <span className="font-mono text-xs text-muted-foreground">
          {viewerCount} viewing now
        </span>
      </motion.div>

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
            Ngbaronye Nmesirionye.
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
            A Mechatronics Engineering student at Federal University of Technology Owerri
            with 2+ years of experience crafting exceptional digital experiences.
            I build accessible, performant, and beautifully designed web apps & robust APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-7 py-4 rounded hover:bg-primary/10 transition-colors"
            >
              Check out my work
              <ArrowDown size={16} />
            </a>
            <button
              onClick={handleDownloadCV}
              data-cv-download
              className="inline-flex items-center gap-2 font-mono text-sm bg-primary text-primary-foreground px-7 py-4 rounded hover:bg-primary/90 transition-colors"
            >
              <Download size={16} />
              Download CV
            </button>
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
              alt="Ngbaronye Nmesirionye - Frontend & API Developer"
              className="relative rounded-full w-full h-full object-cover object-top border-4 border-primary/30 shadow-[var(--shadow-glow)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
