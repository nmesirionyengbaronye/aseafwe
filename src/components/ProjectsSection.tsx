import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import elibraryImg from "@/assets/project-elibrary.jpg";
import zerveImg from "@/assets/project-zerve.jpg";
import emotionalSupportImg from "@/assets/project-emotional-support.jpg";
import marketaiImg from "@/assets/project-marketai.jpg";
import resumeAnalyzerImg from "@/assets/project-resume-analyzer.jpg";

const projects = [
  {
    title: "E-Library",
    description: "A digital library application for browsing, searching, and managing books online with a clean, intuitive interface.",
    details: "This full-stack digital library platform demonstrates strong front-end architecture and UX design skills. Users can browse an extensive catalog of books, search with real-time filtering by title, author, or genre, and manage their reading lists. The responsive design ensures a seamless experience across desktop, tablet, and mobile devices. Built with React and TypeScript for type-safe, maintainable code, and styled with Tailwind CSS for a modern, accessible interface. The project showcases component-driven development, state management patterns, and attention to user experience details like loading states, error handling, and smooth transitions.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Panther0508/E-library",
    live: "https://e-library-panther0508.vercel.app",
    image: elibraryImg,
    featured: true,
  },
  {
    title: "Emotional Support Model",
    description: "An AI-powered emotional support chatbot using natural language processing to provide empathetic responses and mental wellness support.",
    details: "This project demonstrates advanced machine learning and NLP capabilities applied to a meaningful real-world problem — mental health support. The chatbot leverages a trained NLP pipeline that includes tokenization, sentiment analysis, and intent classification to understand user emotions and context. It generates empathetic, contextually appropriate responses using a combination of pattern matching and ML-driven response selection. The model was trained on curated conversational datasets focused on emotional support scenarios. Key technical highlights include text preprocessing pipelines, feature extraction, model training and evaluation, and a conversational interface. This project showcases proficiency in Python, scikit-learn, NLP libraries, and the ability to build AI systems that address human-centered challenges.",
    tech: ["Python", "NLP", "Machine Learning", "AI"],
    github: "https://github.com/Panther0508/Emotional-Support-Model",
    live: "https://emotional-support-model.onrender.com",
    image: emotionalSupportImg,
    featured: true,
  },
  {
    title: "IntentScope",
    description: "A data exploration and interactive code execution platform enabling API development and cloud-based data science workflows.",
    details: "IntentScope is a comprehensive data exploration platform designed for developers and data scientists. It provides an interactive environment for writing and executing code, exploring datasets, and building API endpoints — all within a cloud-based workspace. Key features include intent classification for natural language queries, interactive notebook-style code execution, real-time data visualization, and seamless API development workflows. The platform demonstrates expertise in Python backend development, RESTful API design, data processing pipelines, and cloud deployment. It highlights the ability to build developer tools that streamline complex data science workflows into accessible, productive experiences.",
    tech: ["Python", "API", "Data Science", "NLP"],
    github: "https://github.com/Panther0508/IntentScope",
    live: "https://intentscope.pxxl.click",
    image: zerveImg,
    featured: true,
  },
  {
    title: "MarketAI API",
    description: "An elite market intelligence dashboard with real-time data streams, AI-powered market synthesis, and trending product analytics.",
    details: "MarketAI API is a premium market intelligence platform that aggregates and analyzes real-time market data using AI-powered synthesis. The dashboard features live data streaming for up-to-the-minute market indicators, AI-driven trend analysis that identifies emerging product opportunities, and interactive visualizations for exploring market dynamics. Built with React and TypeScript, the front-end delivers a polished, dark-themed professional interface with responsive charts, data tables, and filtering capabilities. The API integration layer demonstrates proficiency in consuming and transforming external data sources, handling asynchronous data flows, and presenting complex information in an intuitive, actionable format. This project showcases full-stack development skills, data visualization expertise, and the ability to build enterprise-grade analytics tools.",
    tech: ["React", "TypeScript", "API", "AI"],
    github: "https://github.com/Panther0508/Market-Trend-AI",
    live: "https://market-trend-ai.vercel.app",
    image: marketaiImg,
    featured: true,
  },
  {
    title: "AI Resume Analyzer",
    description: "A resume screening tool for employers to efficiently sort and analyze staff resumes at scale with intelligent scoring and filtering.",
    details: "AI Resume Analyzer is a practical HR-tech tool designed to help employers process and evaluate large volumes of resumes efficiently. The platform features resume upload and parsing, keyword-based scoring, candidate ranking, and filtering capabilities — enabling recruiters to quickly identify top candidates from millions of applications. Built with Python on the backend with a clean web interface, the application demonstrates full-stack development skills including file processing, data extraction, scoring algorithms, and API integration. While the AI features operate locally using Python-based NLP pipelines rather than external AI services, all core functionality — resume parsing, skill matching, and candidate comparison — works end-to-end.",
    tech: ["Python", "API", "NLP", "Full-Stack"],
    github: "https://github.com/Panther0508/Ai-resume-analyzer",
    live: "https://ai-resume-analyzer-7ubo.onrender.com/",
    image: resumeAnalyzerImg,
    featured: true,
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

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [open, setOpen] = useState(false);

  return (
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
        {project.featured && (
          <span className="absolute top-4 left-4 font-mono text-xs text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full backdrop-blur-sm">
            Featured
          </span>
        )}
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
            {project.github && project.github !== "#" && (
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
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>

        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="text-muted-foreground/80 text-sm leading-relaxed mb-3 border-l-2 border-primary/30 pl-4">
              {project.details}
            </p>
          </CollapsibleContent>
          <CollapsibleTrigger className="flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors mb-5">
            {open ? (
              <>Read less <ChevronUp size={14} /></>
            ) : (
              <>Read more <ChevronDown size={14} /></>
            )}
          </CollapsibleTrigger>
        </Collapsible>

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
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12">
        <span className="font-mono text-primary text-lg">03.</span>
        Featured Projects
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
