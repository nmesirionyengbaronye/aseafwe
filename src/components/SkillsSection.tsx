import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "Framer Motion"] },
  { category: "API & Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "CI/CD", "Vite", "Figma", "Postman"] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12">
        <span className="font-mono text-primary text-lg">02.</span>
        Skills & Technologies
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>
    </motion.div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-3 gap-6"
    >
      {skills.map((group) => (
        <motion.div
          key={group.category}
          variants={item}
          className="rounded-lg p-6 border border-border bg-card hover:border-primary/40 transition-colors"
          style={{ background: "var(--gradient-card)" }}
        >
          <h3 className="font-mono text-primary text-sm mb-4">{group.category}</h3>
          <ul className="space-y-2">
            {group.items.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                <span className="text-primary text-xs">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default SkillsSection;
