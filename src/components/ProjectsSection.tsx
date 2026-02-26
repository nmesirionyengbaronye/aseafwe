import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration. Built with a modern tech stack for performance and scalability.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management API",
    description: "A RESTful API for task management with authentication, role-based access, and real-time updates via WebSockets. Designed with clean architecture principles.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    live: "#",
  },
  {
    title: "Developer Dashboard",
    description: "An analytics dashboard for monitoring API performance metrics, error rates, and usage statistics with interactive charts and real-time data.",
    tech: ["React", "Tailwind CSS", "Recharts", "REST API"],
    github: "#",
    live: "#",
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
          className="group rounded-lg p-6 md:p-8 border border-border bg-card hover:border-primary/40 transition-all hover:shadow-[var(--shadow-glow)]"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-3">
              <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-xs text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;
