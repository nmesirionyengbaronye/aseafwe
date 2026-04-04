import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const clientProjects = [
  {
    title: "NachiGold — Agricultural E-Commerce",
    industry: "Agriculture / Retail",
    description: "A wholesale and retail agricultural products platform for NachiGold, featuring poultry, dairy, and farm produce catalogs with WhatsApp-based ordering and nationwide delivery.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Delivered",
    link: "https://peaceful-nachi.vercel.app/",
  },
  {
    title: "E.V.Eel Electronics — Gadget Store",
    industry: "Electronics / E-Commerce",
    description: "A product catalog and storefront for a trusted electronics dealer in Onitsha, featuring audio equipment, gadgets, and WhatsApp-integrated ordering.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Delivered",
    link: "https://e-v-eel-electronics.vercel.app/",
  },
  {
    title: "Obuasi Store Room — Comfort Haven",
    industry: "Furniture / Home & Living",
    description: "An e-commerce storefront for affordable luxury foams, chairs, and bedding products with pay-on-delivery and fast shipping across Nigeria.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Delivered",
    link: "https://comfort-haven-eight.vercel.app/",
  },
  {
    title: "Shirt Haven — African Fashion Store",
    industry: "Fashion / E-Commerce",
    description: "A curated African fashion marketplace featuring Ankara dresses, Kente styles, Dashiki, accessories, and a style quiz — with loyalty rewards and WhatsApp ordering.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Delivered",
    link: "https://clothes-stores-one.vercel.app/",
  },
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

const INITIAL_COUNT = 3;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CompletedProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? clientProjects : clientProjects.slice(0, INITIAL_COUNT);

  return (
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
        <AnimatePresence>
          {visible.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              layout
              whileHover={{ y: -4 }}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <Briefcase size={28} className="text-primary/60" />
                <div className="flex items-center gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Visit live site"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 rounded-full">
                    <CheckCircle size={10} />
                    {project.status}
                  </span>
                </div>
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
        </AnimatePresence>
      </motion.div>

      {clientProjects.length > INITIAL_COUNT && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-6 py-3 rounded-lg transition-all duration-300"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>View More ({clientProjects.length - INITIAL_COUNT}) <ChevronDown size={16} /></>
            )}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default CompletedProjectsSection;
