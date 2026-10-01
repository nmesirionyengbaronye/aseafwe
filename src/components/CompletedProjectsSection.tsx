import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkCase } from "@/lib/portfolioContent";

const INITIAL_COUNT = 6;

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const CompletedProjectsSection = ({ projects }: { projects: WorkCase[] }) => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="completed-projects" className="py-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-xs text-primary mb-3">01 / CLIENT WORK</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Delivered for clients</h2>
        <p className="text-muted-foreground text-sm mt-4 max-w-2xl leading-relaxed">
          Real storefronts and platforms shipped live. Each one has its own page with the brief, the approach and the live link.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {visible.map((project) => (
            <motion.div key={project.slug} variants={item} layout whileHover={{ y: -4 }}>
              <article className="group h-full rounded-lg border border-border bg-card p-6 flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-card)" }}>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <p className="font-mono text-xs text-primary/70">{project.category}</p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2.5 py-1 rounded-full shrink-0">
                    <CheckCircle size={10} />{project.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Link to={`/work/${project.slug}`} className="hover:underline">{project.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-5 flex-1">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-border">
                  <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-primary/80 transition-colors">
                    Case study<ArrowRight size={13} />
                  </Link>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
                      Live site
                    </a>
                  )}
                  <span className="font-mono text-[10px] text-muted-foreground ml-auto">{project.role}</span>
                </div>
              </article>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > INITIAL_COUNT && (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-6 py-3 rounded-lg transition-all duration-300"
          >
            {showAll ? <>Show less <ChevronUp size={16} /></> : <>View more ({projects.length - INITIAL_COUNT}) <ChevronDown size={16} /></>}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default CompletedProjectsSection;