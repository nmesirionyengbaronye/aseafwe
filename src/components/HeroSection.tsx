import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, ArrowDown, Twitter, Download, Eye, Linkedin } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { jsPDF } from "jspdf";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/Panther0508", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ngbaronye-nmesirionye-31339b410/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Pantherlord0508", label: "X" },
  { icon: Mail, href: "mailto:nmesirionyengbaronye@gmail.com", label: "Email" },
];

const roles = [
  "Frontend Developer",
  "API Engineer",
  "AI Application Builder",
  "UI/UX Enthusiast",
  "Robotics Enthusiast",
];

const generateCV = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 15; // margin
  const GOLD: [number, number, number] = [161, 130, 38];
  const INK: [number, number, number] = [26, 26, 26];
  const BODY: [number, number, number] = [55, 55, 55];
  const MUTED: [number, number, number] = [110, 110, 110];
  let y = 0;

  const ensure = (needed = 10) => {
    if (y + needed > H - M) {
      doc.addPage();
      y = M;
    }
  };

  const section = (title: string) => {
    ensure(20);
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...GOLD);
    doc.text(title.toUpperCase(), M, y);
    y += 1.8;
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(0.4);
    doc.line(M, y, W - M, y);
    doc.setLineWidth(0.2);
    y += 5.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...BODY);
  };

  const para = (text: string, indent = M, size = 9.5) => {
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, W - indent - M);
    lines.forEach((line: string) => {
      ensure(6);
      doc.text(line, indent, y);
      y += 4.6;
    });
  };

  const bullet = (text: string, indent = M + 4) => {
    doc.setFontSize(9.5);
    const lines = doc.splitTextToSize(text, W - indent - M - 2);
    lines.forEach((line: string, i: number) => {
      ensure(6);
      if (i === 0) {
        doc.setTextColor(...GOLD);
        doc.text("\u2022", indent - 3.5, y);
        doc.setTextColor(...BODY);
      }
      doc.text(line, indent, y);
      y += 4.6;
    });
  };

  const roleHeader = (title: string, org: string, period: string) => {
    ensure(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...INK);
    doc.text(title, M, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(period, W - M, y, { align: "right" });
    y += 4.4;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9.5);
    doc.setTextColor(...BODY);
    doc.text(org, M, y);
    y += 4.6;
    doc.setFont("helvetica", "normal");
  };

  // ===================== HEADER =====================
  doc.setFillColor(18, 18, 18);
  doc.rect(0, 0, W, 34, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(23);
  doc.setTextColor(255, 255, 255);
  doc.text("NGBARONYE NMESIRIONYE", W / 2, 14, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(212, 175, 55);
  doc.text(
    "Frontend Engineer  |  API & Backend Developer  |  AI Application Builder",
    W / 2,
    21,
    { align: "center" },
  );
  doc.setFontSize(8.2);
  doc.setTextColor(215, 215, 215);
  doc.text(
    "nmesirionyengbaronye@gmail.com  |  +234 704 036 9525  |  Owerri / Umuahia, Nigeria  |  Open to Remote",
    W / 2,
    26.5,
    { align: "center" },
  );
  doc.text(
    "linkedin.com/in/ngbaronye-nmesirionye-31339b410  |  github.com/Panther0508  |  x.com/Pantherlord0508",
    W / 2,
    31,
    { align: "center" },
  );
  y = 40;

  // ===================== SUMMARY =====================
  section("Professional Summary");
  para(
    "Frontend and API developer with 3+ years of hands-on experience shipping production web applications and REST/GraphQL services. Delivered 10+ live products for clients across e-commerce, hospitality, agriculture and electronics, plus AI-driven platforms built with Python, NLP and machine learning. Recognised for creativity at the Hack-Nation Global AI Hackathon #6 (2026) for RIE - Resistance Intelligence Engine. Currently completing a B.Eng in Mechatronics Engineering at FUTO, pairing software engineering with control systems and embedded expertise. Strong bias toward measurable performance, accessibility (WCAG) and clean, maintainable architecture.",
  );

  // ===================== CORE COMPETENCIES =====================
  section("Core Competencies");
  const comps = [
    "React & Next.js",
    "TypeScript",
    "REST & GraphQL API Design",
    "Node.js / Express",
    "Python (FastAPI, Flask)",
    "PostgreSQL & Supabase",
    "Tailwind CSS & Design Systems",
    "Web Performance & Accessibility",
    "AI / NLP Integration",
    "CI/CD & Docker",
    "Authentication (JWT, OAuth 2.0)",
    "Embedded Systems & Robotics",
  ];
  const colW = (W - M * 2) / 3;
  for (let i = 0; i < comps.length; i += 3) {
    ensure(6);
    doc.setFontSize(9.5);
    doc.setTextColor(...BODY);
    for (let c = 0; c < 3; c++) {
      const item = comps[i + c];
      if (!item) continue;
      const x = M + c * colW;
      doc.setTextColor(...GOLD);
      doc.text("\u2022", x, y);
      doc.setTextColor(...BODY);
      doc.text(item, x + 3.2, y);
    }
    y += 5;
  }

  // ===================== EXPERIENCE =====================
  section("Professional Experience");
  roleHeader("Freelance Frontend & API Developer", "Independent / Remote", "2022 - Present");
  bullet("Designed, built and deployed 10+ production web applications for clients in e-commerce, hospitality, agriculture and consumer electronics, each shipped live and maintained post-launch.");
  bullet("Cut initial page load times by up to 45% through code-splitting, image optimisation, request caching and pagination on data-heavy interfaces.");
  bullet("Architected and documented REST APIs with structured error handling, input validation, logging and JWT/OAuth 2.0 authentication.");
  bullet("Translated Figma designs into pixel-accurate, fully responsive interfaces that pass WCAG contrast and keyboard-navigation checks.");
  bullet("Owned full delivery lifecycle - requirements, architecture, implementation, deployment (Vercel/Render/Netlify) and ongoing support - communicating directly with non-technical stakeholders.");
  y += 2;

  roleHeader("AI Application Developer (Project-Based)", "Self-Directed & Hackathon Teams", "2023 - Present");
  bullet("Built RIE - Resistance Intelligence Engine at the Hack-Nation Global AI Hackathon #6, delivering a working AI product and live pitch within 48 hours; recognised for creativity of concept and execution.");
  bullet("Developed NLP-powered products including an emotional-support conversational model and an AI resume screening tool, covering sentiment analysis, keyword extraction and candidate scoring.");
  bullet("Served ML models behind FastAPI/Flask endpoints consumed by React frontends, with streaming responses and context retention across sessions.");
  y += 2;

  roleHeader("Open Source Contributor", "GitHub - github.com/Panther0508", "2023 - Present");
  bullet("Contribute pull requests for bug fixes, features and documentation across community repositories; participate in code review with distributed teams.");
  bullet("Maintain personal open-source repositories with clear READMEs, issue triage and reproducible setup instructions.");

  // ===================== SELECTED PROJECTS =====================
  section("Selected Projects");

  const projects: { name: string; meta: string; link?: string; bullets: string[] }[] = [
    {
      name: "RIE - Resistance Intelligence Engine",
      meta: "Hack-Nation Global AI Hackathon #6, 2026  |  Python, NLP, LLM orchestration, React",
      bullets: [
        "AI intelligence engine built and pitched in a 48-hour global hackathon; recognised for creativity among international teams.",
        "Combined NLP pipelines with real-time data processing and a lightweight React interface for exploratory querying.",
      ],
    },
    {
      name: "Client Web Platforms (5 live products)",
      meta: "React, TypeScript, Tailwind CSS, REST APIs",
      link: "peaceful-nachi.vercel.app  |  e-v-eel-electronics.vercel.app  |  comfort-haven-eight.vercel.app  |  clothes-stores-one.vercel.app  |  salubrity-superior-farms.vercel.app",
      bullets: [
        "Shipped storefronts, hospitality booking and agribusiness sites with responsive layouts, product catalogues and enquiry flows.",
        "Reusable component library and shared design tokens reduced build time for each new client site by roughly 30%.",
      ],
    },
    {
      name: "MarketAI - Market Intelligence Dashboard",
      meta: "React, TypeScript, WebSockets, REST APIs, AI analytics",
      bullets: [
        "Real-time market dashboard streaming live data with sub-second update latency via WebSocket connections.",
        "Modular widget architecture allowing new data sources and visualisations to be added without touching core code.",
        "Integrated predictive analytics for trend detection and anomaly alerting; deployed with CI/CD on Render.",
      ],
    },
    {
      name: "AI Resume Analyzer",
      meta: "Python, FastAPI, NLP, Machine Learning, React",
      bullets: [
        "Automated resume screening with NLP keyword extraction and weighted skills matching against job descriptions.",
        "Recruiter dashboard with side-by-side candidate comparison, score breakdowns and generated summary reports.",
      ],
    },
    {
      name: "IntentScope - Data Exploration Platform",
      meta: "Python, FastAPI, NLP, Data Visualisation",
      bullets: [
        "Natural-language querying that translates plain English questions into executable data queries with auto-generated charts.",
        "Collaborative workspace with shared notebooks, live code execution and version history.",
      ],
    },
    {
      name: "Developer News Dashboard & E-Library",
      meta: "React, TypeScript, REST APIs, Tailwind CSS",
      bullets: [
        "News aggregator unifying multiple tech APIs and RSS feeds with advanced filtering, bookmarking and reading history.",
        "Digital library with fuzzy full-text search, authenticated bookshelves and an admin dashboard for catalogue management.",
      ],
    },
  ];

  projects.forEach((p) => {
    ensure(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    para(p.name, M, 10);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(...MUTED);
    para(p.meta, M, 8.6);
    if (p.link) para(p.link, M, 8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...BODY);
    p.bullets.forEach((b) => bullet(b));
    y += 3;
  });

  // ===================== EDUCATION =====================
  section("Education");
  roleHeader(
    "B.Eng, Mechatronics Engineering",
    "Federal University of Technology, Owerri (FUTO), Nigeria",
    "In Progress",
  );
  bullet("Relevant coursework: Control Systems & Automation, Embedded Systems Design, Digital Signal Processing, Data Structures & Algorithms, CAD & Simulation, Engineering Mathematics.");

  // ===================== AWARDS & CERTIFICATIONS =====================
  section("Awards & Certifications");
  bullet("Hack-Nation Global AI Hackathon #6 (July 2026) - recognised for creativity for RIE - Resistance Intelligence Engine. Certificate ID 4AD2609F8D6094C3.");
  bullet("freeCodeCamp - Responsive Web Design; JavaScript Algorithms and Data Structures.");
  bullet("Udemy - The Complete React Developer Course (Hooks, Redux).");
  bullet("Coursera - Python for Everybody Specialization.");
  bullet("Ongoing study: Advanced TypeScript, System Design, Docker & DevOps, Cloud Architecture (AWS/GCP).");

  // ===================== ADDITIONAL =====================
  section("Additional Information");
  bullet("Languages: English (professional, written and spoken); Igbo (native).");
  bullet("Interests: robotics and mechatronics prototyping, open source, system design, applied AI/ML, technical writing.");
  bullet("References available on request.");

  // ===================== FOOTER =====================
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED);
    doc.text("Ngbaronye Nmesirionye - Curriculum Vitae", M, H - 8);
    doc.text(`Page ${i} of ${pages}`, W - M, H - 8, { align: "right" });
  }

  doc.save("Ngbaronye_Nmesirionye_CV.pdf");
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
            with 3 years of experience crafting exceptional digital experiences.
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
