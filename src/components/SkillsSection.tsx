import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Bot,
  Box,
  Braces,
  CircuitBoard,
  Code2,
  Container,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Monitor,
  Palette,
  Radio,
  Server,
  Send,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Monitor,
    items: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: Braces },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Next.js", icon: Layers },
      { name: "HTML/CSS", icon: FileCode2 },
      { name: "Framer Motion", icon: Sparkles },
    ],
  },
  {
    category: "API & Backend",
    icon: Server,
    items: [
      { name: "Python", icon: Terminal },
      { name: "Node.js", icon: Zap },
      { name: "Express", icon: Server },
      { name: "REST APIs", icon: Radio },
      { name: "GraphQL", icon: Braces },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Box },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    items: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "CI/CD", icon: Zap },
      { name: "Vite", icon: Sparkles },
      { name: "Figma", icon: Palette },
      { name: "Postman", icon: Send },
    ],
  },
  {
    category: "Robotics",
    icon: Bot,
    items: [
      { name: "Arduino", icon: CircuitBoard },
      { name: "Raspberry Pi", icon: Cpu },
      { name: "Embedded C", icon: Code2 },
      { name: "Sensors & Actuators", icon: Radio },
      { name: "PCB Design", icon: CircuitBoard },
      { name: "3D Printing", icon: Box },
    ],
  },
];

const skillItem = {
  hidden: { opacity: 0, x: -10 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
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
              className="font-mono text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-1.5"
            >
              <group.icon size={14} />
              <span className="hidden sm:inline">{group.category}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {skills.map((group) => (
          <TabsContent key={group.category} value={group.category}>
            <div className="rounded-lg p-6 border border-border bg-card" style={{ background: "var(--gradient-card)" }}>
              <div className="flex items-center gap-2 mb-4">
                <group.icon size={18} className="text-primary" />
                <h3 className="font-mono text-sm text-foreground font-medium">{group.category}</h3>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {group.items.map((skill, i) => (
                  <motion.li
                    key={skill.name}
                    custom={i}
                    variants={skillItem}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ x: 4, y: -4, rotateX: -5, rotateY: 5 }}
                    className="group/skill flex items-center gap-3 text-muted-foreground text-sm p-2 rounded hover:bg-primary/5 transition-colors cursor-default [transform-style:preserve-3d]"
                  >
                    <span className="relative h-11 w-11 shrink-0 [transform-style:preserve-3d]" aria-hidden="true">
                      <span className="absolute inset-0 translate-x-1 translate-y-1 rounded-md border border-primary/20 bg-primary/10" />
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-md border border-primary/40 bg-background/90 text-primary shadow-[var(--shadow-glow)] [transform:translateZ(10px)] transition-colors group-hover/skill:bg-primary/10">
                        <skill.icon size={20} strokeWidth={1.7} />
                      </span>
                    </span>
                    <span className="font-medium text-foreground/80 group-hover/skill:text-primary transition-colors">{skill.name}</span>
                  </motion.li>
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
