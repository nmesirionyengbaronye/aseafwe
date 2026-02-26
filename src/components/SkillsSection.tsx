import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "Framer Motion"] },
  { category: "API & Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "CI/CD", "Vite", "Figma", "Postman"] },
];

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Tabs defaultValue="Frontend" className="w-full">
        <TabsList className="bg-muted/50 border border-border mb-8">
          {skills.map((group) => (
            <TabsTrigger
              key={group.category}
              value={group.category}
              className="font-mono text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {group.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {skills.map((group) => (
          <TabsContent key={group.category} value={group.category}>
            <div className="rounded-lg p-6 border border-border bg-card" style={{ background: "var(--gradient-card)" }}>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  </section>
);

export default SkillsSection;
