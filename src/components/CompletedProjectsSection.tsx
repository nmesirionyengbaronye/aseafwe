import { motion } from "framer-motion";
import { ExternalLink, Briefcase, CheckCircle } from "lucide-react";

const clientProjects = [
  {
    title: "Client Project — E-Commerce Platform",
    industry: "Retail / E-Commerce",
    description: "A fully responsive e-commerce storefront with product catalog, cart system, and payment integration for a retail client.",
    tech: ["React", "TypeScript", "Stripe", "Tailwind CSS"],
    status: "Delivered",
  },
  {
    title: "Client Project — Business Dashboard",
    industry: "Finance / Analytics",
    description: "A custom analytics dashboard for a finance startup, featuring real-time data visualization, report generation, and role-based access.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    status: "Delivered",
  },
  {
    title: "Client Project — Booking System",
    industry: "Healthcare / Services",
    description: "An appointment booking and management system for a healthcare provider with calendar integration, reminders, and patient portal.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "Delivered",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CompletedProjectsSection = () => (
  <section id="completed-projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-4">
        <span className="font-mono text-primary text-lg">04.</span>
        Completed Projects
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>
      <p className="text-muted-foreground text-sm mb-12">
        Real projects delivered for clients. Results that matter.
      </p>
    </motion.div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {clientProjects.map((project) => (
        <motion.div
          key={project.title}
          variants={item}
          whileHover={{ y: -4 }}
          className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <Briefcase size={28} className="text-primary/60" />
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 rounded-full">
              <CheckCircle size={10} />
              {project.status}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-primary/60 mb-3">{project.industry}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default CompletedProjectsSection;
