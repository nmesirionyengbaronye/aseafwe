import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, ArrowDown, Twitter, Download, Eye } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { jsPDF } from "jspdf";
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
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  const addSection = (title: string) => {
    if (y > 250) { doc.addPage(); y = 20; }
    y += 8;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(180, 150, 50);
    doc.text(title, 14, y);
    y += 2;
    doc.setDrawColor(180, 150, 50);
    doc.line(14, y, pageWidth - 14, y);
    y += 7;
    doc.setTextColor(40, 40, 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
  };

  const addLine = (text: string, indent = 14) => {
    if (y > 275) { doc.addPage(); y = 20; }
    const lines = doc.splitTextToSize(text, pageWidth - indent - 14);
    doc.text(lines, indent, y);
    y += lines.length * 5.5;
  };

  const addBullet = (text: string, indent = 20) => {
    if (y > 275) { doc.addPage(); y = 20; }
    doc.text("•", indent - 4, y);
    const lines = doc.splitTextToSize(text, pageWidth - indent - 14);
    doc.text(lines, indent, y);
    y += lines.length * 5.5;
  };

  // ===== PAGE 1: HEADER & PROFILE =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(30, 30, 30);
  doc.text("NGBARONYE NMESIRIONYE", pageWidth / 2, y, { align: "center" });
  y += 9;
  doc.setFontSize(12);
  doc.setTextColor(180, 150, 50);
  doc.text("Frontend Developer | API Engineer | Robotics Enthusiast", pageWidth / 2, y, { align: "center" });
  y += 5;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("nmesirionyengbaronye@gmail.com  |  07040369525  |  github.com/Panther0508  |  x.com/Pantherlord0508", pageWidth / 2, y + 4, { align: "center" });
  y += 6;
  doc.setDrawColor(180, 150, 50);
  doc.setLineWidth(0.5);
  doc.line(14, y, pageWidth - 14, y);
  doc.setLineWidth(0.2);
  y += 4;

  addSection("PROFESSIONAL SUMMARY");
  addLine("Passionate and detail-oriented frontend and API developer with over 3 years of hands-on experience building accessible, performant, and beautifully designed web applications and robust backend APIs. Proficient in modern JavaScript frameworks, responsive design, and RESTful/GraphQL API architecture.");
  y += 2;
  addLine("Currently pursuing a Bachelor of Engineering in Mechatronics at the Federal University of Technology, Owerri (FUTO), combining software engineering expertise with a strong foundation in robotics, embedded systems, and control engineering. Originally from Umuahia, Abia State, Nigeria.");
  y += 2;
  addLine("Driven by a deep commitment to open-source contribution, continuous learning, and leveraging technology to solve real-world problems. Adept at translating complex requirements into elegant, user-friendly interfaces and scalable backend solutions.");

  addSection("EDUCATION");
  doc.setFont("helvetica", "bold");
  addLine("Federal University of Technology, Owerri (FUTO)");
  doc.setFont("helvetica", "normal");
  addLine("Bachelor of Engineering (B.Eng) — Mechatronics Engineering", 20);
  addLine("Status: Currently Enrolled (In Progress)", 20);
  y += 2;
  doc.setFont("helvetica", "italic");
  addLine("Relevant Coursework:", 20);
  doc.setFont("helvetica", "normal");
  addBullet("Control Systems Engineering & Automation", 26);
  addBullet("Embedded Systems Design & Programming", 26);
  addBullet("Digital Signal Processing & Microcontrollers", 26);
  addBullet("Computer-Aided Design (CAD) & Simulation", 26);
  addBullet("Data Structures & Algorithms", 26);
  addBullet("Engineering Mathematics & Applied Physics", 26);

  addSection("TECHNICAL SKILLS");
  const skillCategories = [
    ["Frontend Development", "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Framer Motion, Responsive Design, Progressive Web Apps (PWA), Accessibility (WCAG), Component Libraries (shadcn/ui, Material UI)"],
    ["API & Backend", "Node.js, Express.js, REST API Design & Development, GraphQL, PostgreSQL, MongoDB, Supabase, Firebase, Python (Flask, FastAPI), Authentication & Authorization (JWT, OAuth 2.0)"],
    ["Tools & DevOps", "Git & GitHub, Docker, CI/CD Pipelines (GitHub Actions), Vite, Webpack, Figma (UI/UX Design), Postman, VS Code, Linux (Ubuntu), Vercel, Render, Netlify"],
    ["Robotics & Embedded", "Arduino (C/C++), Raspberry Pi, Embedded C, Sensors & Actuators, PID Control Systems, MATLAB/Simulink, 3D Printing & Prototyping"],
    ["Soft Skills", "Problem Solving, Team Collaboration, Technical Writing, Project Management, Agile/Scrum Methodology, Communication, Mentoring"],
  ];
  skillCategories.forEach(([cat, items]) => {
    if (y > 260) { doc.addPage(); y = 20; }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`${cat}:`, 14, y);
    y += 5.5;
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(items, pageWidth - 20 - 14);
    doc.text(lines, 20, y);
    y += lines.length * 5.5 + 3;
  });

  // ===== PROJECTS (Detailed) =====
  addSection("PROJECTS");

  const projects = [
    {
      name: "MarketAI API — Market Intelligence Dashboard",
      period: "2024 – Present",
      tech: "React, TypeScript, Tailwind CSS, REST APIs, AI/ML Integration",
      bullets: [
        "Designed and developed an elite market intelligence dashboard featuring real-time data streams, interactive charts, and AI-powered predictive analytics for market trends.",
        "Implemented WebSocket connections for live data feeds, ensuring sub-second latency on market updates and notifications.",
        "Built a modular component architecture enabling plug-and-play integration of new data sources and visualization widgets.",
        "Integrated AI-powered analytics engine for automated trend detection, anomaly alerts, and forecasting models.",
        "Deployed on Render with CI/CD pipeline for automated testing and deployment workflows.",
      ],
    },
    {
      name: "Developer News Dashboard — Tech News Aggregator",
      period: "2024 – Present",
      tech: "React, TypeScript, REST APIs, Tailwind CSS",
      bullets: [
        "Built a centralized news aggregation platform for developers, pulling real-time articles from multiple tech news APIs and RSS feeds.",
        "Implemented advanced filtering and search functionality, allowing users to sort news by category, source, date, and relevance.",
        "Designed a clean, distraction-free reading interface with dark/light mode support and responsive layout for all devices.",
        "Added bookmarking and reading history features for personalized news consumption and tracking.",
        "Optimized API calls with request caching and pagination to minimize load times and bandwidth usage.",
      ],
    },
    {
      name: "E-Library — Digital Library Management System",
      period: "2024",
      tech: "React, TypeScript, Tailwind CSS, REST APIs",
      bullets: [
        "Developed a comprehensive digital library application for browsing, searching, and managing an extensive collection of books online.",
        "Implemented full-text search with fuzzy matching, category filters, and author-based navigation for intuitive book discovery.",
        "Built a responsive, card-based UI showcasing book covers, descriptions, ratings, and availability status.",
        "Designed user authentication flow for personalized bookshelves, reading lists, and borrowing history.",
        "Created an admin dashboard for library management including book CRUD operations, user management, and analytics.",
      ],
    },
    {
      name: "Emotional Support Model — AI Chatbot",
      period: "2024",
      tech: "Python, NLP, Machine Learning, TensorFlow, Flask",
      bullets: [
        "Engineered an AI-powered emotional support chatbot leveraging Natural Language Processing (NLP) for empathetic, context-aware conversational responses.",
        "Trained custom sentiment analysis models to detect user emotional states and tailor responses accordingly.",
        "Implemented conversation memory and context tracking for coherent multi-turn therapeutic dialogues.",
        "Built a clean web interface with real-time message streaming and typing indicators for natural interaction flow.",
        "Deployed as a REST API service on Render, enabling integration with multiple frontend applications.",
      ],
    },
    {
      name: "IntentScope — Data Exploration Platform",
      period: "2023 – 2024",
      tech: "Python, FastAPI, NLP, Data Science, Jupyter Integration",
      bullets: [
        "Created a data exploration and interactive code execution platform designed for API developers and data scientists.",
        "Built an intuitive interface for writing, executing, and visualizing Python code with real-time output rendering.",
        "Implemented natural language query processing using NLP to translate plain English questions into executable data queries.",
        "Integrated data visualization libraries for automatic chart generation based on query results and dataset characteristics.",
        "Designed a collaborative workspace supporting multiple users with shared notebooks and version history.",
      ],
    },
    {
      name: "AI Resume Analyzer — Intelligent Screening Tool",
      period: "2023 – 2024",
      tech: "Python, FastAPI, NLP, Machine Learning, Full-Stack",
      bullets: [
        "Developed an intelligent resume screening tool for employers with automated scoring, ranking, and filtering of candidate applications.",
        "Implemented NLP-based keyword extraction and skills matching against job descriptions with configurable weighting.",
        "Built a dashboard for HR professionals to review candidates with side-by-side comparison and detailed scoring breakdowns.",
        "Created automated report generation with candidate summaries, strengths, weaknesses, and recommendation scores.",
        "Integrated with email APIs for automated candidate communication and interview scheduling workflows.",
      ],
    },
  ];

  projects.forEach((p) => {
    if (y > 240) { doc.addPage(); y = 20; }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    addLine(p.name);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    addLine(`${p.period}  |  ${p.tech}`, 20);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    y += 1;
    p.bullets.forEach((b) => {
      addBullet(b, 24);
    });
    y += 4;
  });

  // ===== CERTIFICATIONS & LEARNING =====
  addSection("CERTIFICATIONS & CONTINUOUS LEARNING");
  addBullet("freeCodeCamp — Responsive Web Design Certification");
  addBullet("freeCodeCamp — JavaScript Algorithms and Data Structures");
  addBullet("Udemy — The Complete React Developer Course (with Hooks & Redux)");
  addBullet("Coursera — Python for Everybody Specialization");
  addBullet("YouTube & Self-Study — Advanced TypeScript, System Design, Docker & DevOps Fundamentals");
  addBullet("Ongoing — Cloud Architecture (AWS/GCP), Advanced Machine Learning, Embedded Systems Programming");

  // ===== EXPERIENCE / FREELANCE =====
  addSection("PROFESSIONAL EXPERIENCE");
  doc.setFont("helvetica", "bold");
  addLine("Freelance Frontend & API Developer");
  doc.setFont("helvetica", "italic");
  addLine("Self-Employed  |  2022 – Present", 20);
  doc.setFont("helvetica", "normal");
  y += 1;
  addBullet("Delivered 10+ custom web applications for clients across e-commerce, education, and fintech sectors.", 24);
  addBullet("Collaborated with designers and project managers to translate wireframes and mockups into pixel-perfect, responsive interfaces.", 24);
  addBullet("Built and maintained RESTful APIs handling thousands of daily requests with robust error handling and logging.", 24);
  addBullet("Provided ongoing maintenance, performance optimization, and feature enhancements for client projects.", 24);
  addBullet("Managed full project lifecycles from requirements gathering and architecture planning through deployment and post-launch support.", 24);
  y += 3;

  doc.setFont("helvetica", "bold");
  addLine("Open Source Contributor");
  doc.setFont("helvetica", "italic");
  addLine("GitHub  |  2023 – Present", 20);
  doc.setFont("helvetica", "normal");
  y += 1;
  addBullet("Actively contribute to open-source projects on GitHub, submitting pull requests for bug fixes, feature enhancements, and documentation improvements.", 24);
  addBullet("Maintain personal open-source repositories with comprehensive README documentation, issue tracking, and community engagement.", 24);
  addBullet("Participate in code reviews and collaborative development with distributed teams across multiple time zones.", 24);

  // ===== ACHIEVEMENTS =====
  addSection("KEY ACHIEVEMENTS & HIGHLIGHTS");
  addBullet("Successfully delivered 10+ production-grade web applications and APIs for diverse clients and personal projects.");
  addBullet("Built AI-powered applications integrating machine learning models for real-time data analysis and natural language processing.");
  addBullet("Maintained a consistent GitHub contribution streak, demonstrating commitment to continuous coding and open-source development.");
  addBullet("Developed cross-platform solutions optimized for performance across desktop, tablet, and mobile devices.");
  addBullet("Received positive client feedback for delivering projects ahead of schedule with attention to detail and code quality.");
  addBullet("Mentored junior developers in modern web technologies, code best practices, and debugging methodologies.");

  // ===== LANGUAGES =====
  addSection("LANGUAGES");
  addBullet("English — Professional Proficiency (Written & Spoken)");
  addBullet("Igbo — Native Speaker");

  // ===== INTERESTS =====
  addSection("INTERESTS & ACTIVITIES");
  addBullet("Robotics & Mechatronics: Building hobby robots, experimenting with sensors, actuators, and control algorithms.");
  addBullet("Open Source: Contributing to community projects and maintaining personal repositories on GitHub.");
  addBullet("System Design: Studying distributed systems architecture, scalability patterns, and cloud infrastructure.");
  addBullet("AI & Machine Learning: Exploring NLP, computer vision, and reinforcement learning applications.");
  addBullet("Technical Writing: Documenting projects, writing tutorials, and sharing knowledge through blog posts.");
  addBullet("Community: Participating in developer meetups, hackathons, and online tech communities.");

  // ===== REFERENCES =====
  addSection("REFERENCES");
  addLine("Available upon request.");

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
