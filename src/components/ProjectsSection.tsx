import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp, AlertTriangle, Lightbulb, List, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import rieImg from "@/assets/project-rie.jpg";
import stadiumImg from "@/assets/project-stadium.jpg";
import marketaiImg from "@/assets/project-marketai.jpg";
import newsDashboardImg from "@/assets/project-news-dashboard.jpg";
import elibraryImg from "@/assets/project-elibrary.jpg";
import emotionalSupportImg from "@/assets/project-emotional-support.jpg";
import zerveImg from "@/assets/project-zerve.jpg";
import resumeAnalyzerImg from "@/assets/project-resume-analyzer.jpg";
import hackathonTestsImg from "@/assets/project-hackathon-tests.jpg";
import type { WorkCase } from "@/lib/portfolioContent";

/** Only projects with a screenshot. Keyed by the `image` field on WorkCase. */
const images: Record<string, string> = {
  rie: rieImg,
  stadium: stadiumImg,
  marketai: marketaiImg,
  "news-dashboard": newsDashboardImg,
  elibrary: elibraryImg,
  "emotional-support": emotionalSupportImg,
  intentscope: zerveImg,
  "resume-analyzer": resumeAnalyzerImg,
  "hackathon-tests": hackathonTestsImg,
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const statusTone: Record<string, string> = {
  Shipped: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Building: "text-primary bg-primary/10 border-primary/30",
  "Early concept": "text-muted-foreground bg-muted/40 border-border",
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

const ProjectCard = ({ project }: { project: WorkCase }) => {
  const image = project.image ? images[project.image] : undefined;

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      className="group rounded-lg overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
      style={{ background: "var(--gradient-card)" }}
    >
      {image && (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={project.title}
            className="w-full h-48 md:h-56 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        </div>
      )}

      <div className={image ? "p-6 md:p-8" : "p-6 md:p-8 pt-0"}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              <Link to={`/work/${project.slug}`} className="hover:underline">{project.title}</Link>
            </h3>
            <p className="font-mono text-xs text-primary/70 mt-1.5">
              {project.role} · {project.period ?? "Period not published"}
            </p>
          </div>
          <div className="flex gap-3 shrink-0 pt-1">
            {project.source && (
              <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.title} source repository`} className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={17} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`} className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] border rounded-full px-2.5 py-1 ${statusTone[project.status]}`}>
            {project.status}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground border border-border rounded-full px-2.5 py-1">{project.kind}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.summary}</p>

        <div className="space-y-2 mb-5">
          <CollapsibleSection label="Problem" icon={AlertTriangle} borderColor="text-red-400 hover:text-red-300">
            <p className="text-muted-foreground/80 text-sm leading-relaxed border-l-2 border-red-400/40 pl-4 py-2">{project.problem}</p>
          </CollapsibleSection>

          <CollapsibleSection label="Solution" icon={Lightbulb} borderColor="text-emerald-400 hover:text-emerald-300">
            <p className="text-muted-foreground/80 text-sm leading-relaxed border-l-2 border-emerald-400/40 pl-4 py-2">{project.solution}</p>
          </CollapsibleSection>

          <CollapsibleSection label="Key Features" icon={List} borderColor="text-primary hover:text-primary/80">
            <ul className="text-muted-foreground/80 text-sm leading-relaxed border-l-2 border-primary/40 pl-4 py-2 space-y-1">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </CollapsibleSection>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-primary/80 transition-colors"
        >
          Read the case study<ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ projects }: { projects: WorkCase[] }) => (
  <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="font-mono text-xs text-primary mb-3">02 / PROJECTS</p>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{projects.length} projects, each with its own case study</h2>
      <p className="text-muted-foreground text-sm mt-4 max-w-2xl leading-relaxed">
        Open-source builds and products. Every one has a dedicated page with the problem, the approach, the role, the status and the links.
      </p>
    </motion.div>

    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} className="space-y-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;