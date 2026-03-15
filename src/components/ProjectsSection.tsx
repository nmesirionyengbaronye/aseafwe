import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import elibraryImg from "@/assets/project-elibrary.jpg";
import zerveImg from "@/assets/project-zerve.jpg";
import emotionalSupportImg from "@/assets/project-emotional-support.jpg";
import marketaiImg from "@/assets/project-marketai.jpg";
import resumeAnalyzerImg from "@/assets/project-resume-analyzer.jpg";
import newsDashboardImg from "@/assets/project-news-dashboard.jpg";

const projects = [
  {
    title: "MarketAI API",
    description: "An elite market intelligence dashboard with real-time data streams, AI-powered market synthesis, and trending product analytics.",
    details: "**Problem:** Businesses and analysts struggle to keep up with rapidly changing market trends, often relying on fragmented data sources and manual research that leads to delayed, uninformed decisions.\n\n**Solution:** MarketAI API is a premium market intelligence platform that aggregates and analyzes real-time market data using AI-powered synthesis. The dashboard delivers live data streaming for up-to-the-minute market indicators, AI-driven trend analysis that identifies emerging product opportunities, and interactive visualizations for exploring market dynamics.\n\n**Key Features:**\n• Real-time data streaming and market indicator tracking\n• AI-powered trend analysis and opportunity identification\n• Interactive charts, data tables, and advanced filtering\n• Dark-themed professional interface with responsive design\n• Robust API integration layer for consuming and transforming external data sources",
    tech: ["React", "TypeScript", "API", "AI"],
    github: "https://github.com/Panther0508/Market-Trend-AI",
    live: "https://market-trend-ai.onrender.com/",
    image: marketaiImg,
    featured: true,
  },
  {
    title: "Developer News Dashboard",
    description: "A centralized news aggregation dashboard for developers, curating the latest tech articles, trending topics, and industry updates in real time.",
    details: "**Problem:** Developers waste valuable time jumping between multiple news sources, blogs, and social feeds to stay updated on the latest technologies, frameworks, and industry trends — often missing critical updates.\n\n**Solution:** The Developer News Dashboard is a one-stop aggregation platform that curates and organizes developer-focused news from multiple sources into a clean, scannable interface. It features category-based filtering, trending topic highlights, and real-time content updates.\n\n**Key Features:**\n• Real-time news aggregation from multiple developer-focused sources\n• Category filtering (frontend, backend, DevOps, AI/ML, etc.)\n• Trending topics sidebar with popularity metrics\n• Clean, dark-themed UI optimized for readability\n• Responsive design for desktop and mobile browsing",
    tech: ["React", "TypeScript", "API", "News Aggregation"],
    github: "https://github.com/Panther0508/Developer-News-Dashboard",
    live: "https://developer-news-dashboard.onrender.com",
    image: newsDashboardImg,
    featured: true,
  },
  {
    title: "E-Library",
    description: "A digital library application for browsing, searching, and managing books online with a clean, intuitive interface.",
    details: "**Problem:** Access to organized digital book collections is often locked behind clunky interfaces or expensive platforms, making it difficult for readers to discover and manage books efficiently.\n\n**Solution:** This full-stack digital library platform provides a seamless book browsing and management experience. Users can explore an extensive catalog, search with real-time filtering by title, author, or genre, and manage their reading lists — all through a modern, accessible interface.\n\n**Key Features:**\n• Real-time search and filtering by title, author, and genre\n• Responsive design for desktop, tablet, and mobile\n• Component-driven architecture with React and TypeScript\n• Smooth loading states, error handling, and transitions\n• Clean, intuitive UI styled with Tailwind CSS",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Panther0508/E-library",
    live: "https://e-library-panther0508.vercel.app",
    image: elibraryImg,
    featured: true,
  },
  {
    title: "Emotional Support Model",
    description: "An AI-powered emotional support chatbot using natural language processing to provide empathetic responses and mental wellness support.",
    details: "**Problem:** Mental health support is often inaccessible, expensive, or stigmatized — leaving many people without a safe space to express their emotions and receive empathetic guidance when they need it most.\n\n**Solution:** This AI-powered chatbot leverages a trained NLP pipeline including tokenization, sentiment analysis, and intent classification to understand user emotions and generate empathetic, contextually appropriate responses. Trained on curated emotional support conversation datasets.\n\n**Key Features:**\n• Sentiment analysis and intent classification for emotion understanding\n• Empathetic response generation using ML-driven selection\n• Text preprocessing and feature extraction pipelines\n• Conversational interface for natural interaction\n• Trained on curated mental health support datasets",
    tech: ["Python", "NLP", "Machine Learning", "AI"],
    github: "https://github.com/Panther0508/Emotional-Support-Model",
    live: "https://emotional-support-model-1.onrender.com/",
    image: emotionalSupportImg,
    featured: true,
  },
  {
    title: "IntentScope",
    description: "A data exploration and interactive code execution platform enabling API development and cloud-based data science workflows.",
    details: "**Problem:** Data scientists and developers often lack a unified environment for exploring datasets, writing code, and building APIs — switching between tools slows down productivity and creates friction in workflows.\n\n**Solution:** IntentScope is a comprehensive data exploration platform that provides an interactive environment for writing and executing code, exploring datasets, and building API endpoints — all within a cloud-based workspace. It features intent classification for natural language queries and seamless API development workflows.\n\n**Key Features:**\n• Intent classification for natural language data queries\n• Interactive notebook-style code execution\n• Real-time data visualization\n• Seamless API development and testing workflows\n• Cloud-based workspace accessible from anywhere",
    tech: ["Python", "API", "Data Science", "NLP"],
    github: "https://github.com/Panther0508/IntentScope",
    live: "https://intentscope.pxxl.click",
    image: zerveImg,
    featured: true,
  },
  {
    title: "AI Resume Analyzer",
    description: "A resume screening tool for employers to efficiently sort and analyze staff resumes at scale with intelligent scoring and filtering.",
    details: "**Problem:** Recruiters and HR teams are overwhelmed by the volume of resumes they receive, making it nearly impossible to manually review and compare candidates fairly and efficiently at scale.\n\n**Solution:** AI Resume Analyzer is a practical HR-tech tool that automates resume processing and evaluation. It features resume upload and parsing, keyword-based scoring, candidate ranking, and filtering — enabling recruiters to quickly identify top candidates from large applicant pools.\n\n**Key Features:**\n• Automated resume parsing and data extraction\n• Keyword-based scoring and candidate ranking algorithms\n• Advanced filtering and comparison capabilities\n• Python-based NLP pipelines for skill matching\n• Clean web interface for easy recruiter interaction",
    tech: ["Python", "API", "NLP", "Full-Stack"],
    github: "https://github.com/Panther0508/Ai-resume-analyzer",
    live: "https://ai-resume-analyzer-7ubo.onrender.com/login",
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
