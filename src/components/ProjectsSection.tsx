import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import elibraryImg from "@/assets/project-elibrary.jpg";
import zerveImg from "@/assets/project-zerve.jpg";
import emotionalSupportImg from "@/assets/project-emotional-support.jpg";
import marketaiImg from "@/assets/project-marketai.jpg";

const projects = [
  {
    title: "E-Library",
    description: "A digital library application for browsing, searching, and managing books online. Features a clean interface for an intuitive reading and discovery experience.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Panther0508/E-library",
    live: "https://e-library-panther0508.vercel.app",
    image: elibraryImg,
    featured: true,
  },
  {
    title: "Emotional Support Model",
    description: "An AI-powered emotional support chatbot built with Python. Uses natural language processing to provide empathetic responses and mental wellness support through conversational AI.",
    tech: ["Python", "NLP", "Machine Learning", "AI"],
    github: "https://github.com/Panther0508/Emotional-Support-Model",
    live: "",
    image: emotionalSupportImg,
    featured: true,
  },
  {
    title: "Zerve API Notebook",
    description: "An API notebook built on the Zerve platform for data exploration, API development, and interactive code execution in the cloud.",
    tech: ["Python", "API", "Zerve", "Data Science"],
    github: "#",
    live: "https://app.zerve.ai/notebook/67aee2b8-045d-4f51-bd59-e54118a84daa?session_id=3df49dfe-ff30-4395-b106-6dbc1327ae78",
    image: zerveImg,
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
        <motion.div
          key={project.title}
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
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;
