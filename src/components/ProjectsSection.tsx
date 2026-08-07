import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp, AlertTriangle, Lightbulb, List } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import elibraryImg from "@/assets/project-elibrary.jpg";
import zerveImg from "@/assets/project-zerve.jpg";
import emotionalSupportImg from "@/assets/project-emotional-support.jpg";
import marketaiImg from "@/assets/project-marketai.jpg";
import resumeAnalyzerImg from "@/assets/project-resume-analyzer.jpg";
import newsDashboardImg from "@/assets/project-news-dashboard.jpg";
import rieImg from "@/assets/project-rie.jpg";

const projects = [
  {
    title: "RIE — Resistance Intelligence Engine",
    description: "Award-recognised AI intelligence engine built and pitched at the 6th Hack-Nation Global AI Hackathon, recognised for creativity of concept and execution.",
    problem: "Teams tracking antimicrobial and systemic resistance signals work with scattered, unstructured reports, so emerging resistance patterns surface far too late to act on.",
    solution: "RIE ingests unstructured resistance data, applies NLP and model orchestration to extract entities and trends, and surfaces ranked intelligence through a real-time query interface — built end to end in a 48-hour sprint.",
    features: [
      "NLP pipeline for entity extraction from unstructured reports",
      "Model orchestration layer for reasoning over resistance signals",
      "Real-time data pipeline with ranked intelligence output",
      "Query interface for exploring patterns and trends",
      "Shipped and pitched within a 48-hour global hackathon",
    ],
    tech: ["Python", "NLP", "AI", "Data Pipelines"],
    github: "https://github.com/Panther0508/rie-submission",
    live: "",
    image: rieImg,
  },
  {
    title: "MarketAI API",
    description: "An elite market intelligence dashboard with real-time data streams, AI-powered market synthesis, and trending product analytics.",
    problem: "Businesses and analysts struggle to keep up with rapidly changing market trends, often relying on fragmented data sources and manual research that leads to delayed, uninformed decisions.",
    solution: "MarketAI API aggregates and analyzes real-time market data using AI-powered synthesis, delivering live data streaming, trend analysis, and interactive visualizations — all in one premium dashboard.",
    features: [
      "Real-time data streaming and market indicator tracking",
      "AI-powered trend analysis and opportunity identification",
      "Interactive charts, data tables, and advanced filtering",
      "Dark-themed professional interface with responsive design",
      "Robust API integration layer for external data sources",
    ],
    tech: ["React", "TypeScript", "API", "AI"],
    github: "https://github.com/Panther0508/Market-Trend-AI",
    live: "https://market-trend-ai.onrender.com/",
    image: marketaiImg,
  },
  {
    title: "Developer News Dashboard",
    description: "A centralized news aggregation dashboard for developers, curating the latest tech articles, trending topics, and industry updates in real time.",
    problem: "Developers waste valuable time jumping between multiple news sources, blogs, and social feeds to stay updated on the latest technologies and industry trends.",
    solution: "A one-stop aggregation platform that curates and organizes developer-focused news from multiple sources into a clean, scannable interface with category-based filtering and trending topic highlights.",
    features: [
      "Real-time news aggregation from multiple developer sources",
      "Category filtering (frontend, backend, DevOps, AI/ML)",
      "Trending topics sidebar with popularity metrics",
      "Clean, dark-themed UI optimized for readability",
      "Responsive design for desktop and mobile",
    ],
    tech: ["React", "TypeScript", "API", "News Aggregation"],
    github: "https://github.com/Panther0508/Developer-News-Dashboard",
    live: "https://developer-news-dashboard.onrender.com",
    image: newsDashboardImg,
  },
  {
    title: "E-Library",
    description: "A digital library application for browsing, searching, and managing books online with a clean, intuitive interface.",
    problem: "Access to organized digital book collections is often locked behind clunky interfaces or expensive platforms, making it hard for readers to discover and manage books efficiently.",
    solution: "A full-stack digital library platform with seamless book browsing, real-time search filtering by title, author, or genre, and reading list management through a modern, accessible interface.",
    features: [
      "Real-time search and filtering by title, author, and genre",
      "Responsive design for desktop, tablet, and mobile",
      "Component-driven architecture with React and TypeScript",
      "Smooth loading states, error handling, and transitions",
      "Clean UI styled with Tailwind CSS",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Panther0508/E-library",
    live: "https://e-library-panther0508.vercel.app",
    image: elibraryImg,
  },
  {
    title: "Emotional Support Model",
    description: "An AI-powered emotional support chatbot using natural language processing to provide empathetic responses and mental wellness support.",
    problem: "Mental health support is often inaccessible, expensive, or stigmatized — leaving many people without a safe space to express their emotions and receive guidance.",
    solution: "An AI chatbot leveraging tokenization, sentiment analysis, and intent classification to understand user emotions and generate empathetic, contextually appropriate responses.",
    features: [
      "Sentiment analysis and intent classification",
      "Empathetic response generation using ML-driven selection",
      "Text preprocessing and feature extraction pipelines",
      "Conversational interface for natural interaction",
      "Trained on curated mental health support datasets",
    ],
    tech: ["Python", "NLP", "Machine Learning", "AI"],
    github: "https://github.com/Panther0508/Emotional-Support-Model",
    live: "https://emotional-support-model-1.onrender.com/",
    image: emotionalSupportImg,
  },
  {
    title: "IntentScope",
    description: "A data exploration and interactive code execution platform enabling API development and cloud-based data science workflows.",
    problem: "Data scientists and developers lack a unified environment for exploring datasets, writing code, and building APIs — switching between tools slows productivity.",
    solution: "A comprehensive data exploration platform with intent classification for natural language queries, interactive notebook-style execution, and seamless API development workflows.",
    features: [
      "Intent classification for natural language data queries",
      "Interactive notebook-style code execution",
      "Real-time data visualization",
      "Seamless API development and testing workflows",
      "Cloud-based workspace accessible from anywhere",
    ],
    tech: ["Python", "API", "Data Science", "NLP"],
    github: "https://github.com/Panther0508/IntentScope",
    live: "https://intentscope.pxxl.click",
    image: zerveImg,
  },
  {
    title: "AI Resume Analyzer",
    description: "A resume screening tool for employers to efficiently sort and analyze staff resumes at scale with intelligent scoring and filtering.",
    problem: "Recruiters are overwhelmed by the volume of resumes, making it nearly impossible to manually review and compare candidates fairly and efficiently at scale.",
    solution: "An HR-tech tool that automates resume processing with keyword-based scoring, candidate ranking, and filtering — enabling recruiters to quickly identify top candidates.",
    features: [
      "Automated resume parsing and data extraction",
      "Keyword-based scoring and candidate ranking",
      "Advanced filtering and comparison capabilities",
      "Python-based NLP pipelines for skill matching",
      "Clean web interface for recruiter interaction",
    ],
    tech: ["Python", "API", "NLP", "Full-Stack"],
    github: "https://github.com/Panther0508/Ai-resume-analyzer",
    live: "https://ai-resume-analyzer-7ubo.onrender.com/login",
    image: resumeAnalyzerImg,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CollapsibleSection = ({
  label,
  icon: Icon,
  borderColor,
  children,
}: {
  label: string;
  icon: React.ElementType;
  borderColor: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className={`flex items-center gap-1.5 text-xs font-mono transition-colors mb-1 ${borderColor}`}>
        <Icon size={12} />
        {label}
        {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -4 }}
    className="group rounded-lg overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
    style={{ background: "var(--gradient-card)" }}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 md:h-56 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      <span className="absolute top-4 left-4 font-mono text-xs text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full backdrop-blur-sm">
        Open Source
      </span>
    </div>
    <div className="p-6 md:p-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Folder size={18} className="text-primary/60" />
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all">
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="space-y-2 mb-5">
        <CollapsibleSection label="Problem" icon={AlertTriangle} borderColor="text-red-400 hover:text-red-300">
          <p className="text-muted-foreground/80 text-sm leading-relaxed border-l-2 border-red-400/40 pl-4 py-2">
            {project.problem}
          </p>
        </CollapsibleSection>

        <CollapsibleSection label="Solution" icon={Lightbulb} borderColor="text-emerald-400 hover:text-emerald-300">
          <p className="text-muted-foreground/80 text-sm leading-relaxed border-l-2 border-emerald-400/40 pl-4 py-2">
            {project.solution}
          </p>
        </CollapsibleSection>

        <CollapsibleSection label="Key Features" icon={List} borderColor="text-primary hover:text-primary/80">
          <ul className="text-muted-foreground/80 text-sm leading-relaxed border-l-2 border-primary/40 pl-4 py-2 space-y-1">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </CollapsibleSection>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12">
        <span className="font-mono text-primary text-lg">04.</span>
        Open Source Projects
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>
    </motion.div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;
