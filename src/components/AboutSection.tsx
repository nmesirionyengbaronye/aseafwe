import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { Code2, Cpu, Globe, Rocket } from "lucide-react";

const highlights = [
  { label: "Experience", value: "3 Years", icon: Code2 },
  { label: "University", value: "FUTO (Mechatronics)", icon: Cpu },
  { label: "Location", value: "Nigeria", icon: Globe },
  { label: "Origin", value: "Umuahia, Abia", icon: Rocket },
];

const techStack = ["React", "TypeScript", "Node.js", "Python", "Arduino", "Docker"];

const AboutSection = () => (
  <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-8">
        <span className="font-mono text-primary text-lg">01.</span>
        About Me
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="text-muted-foreground leading-relaxed space-y-4 text-base flex-1">
          <p>
            Hello! I'm Nmesirionye Ngbaronye, a passionate developer and Mechatronics Engineering student at the
            <a
              href="https://futo.edu.ng"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-medium underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
            >
              {" "}Federal University of Technology, Owerri (FUTO)
            </a>.
            Originally from{" "}
            <a
              href="https://abiastate.gov.ng"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-medium underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
            >
              Umuahia, Abia State
            </a>, Nigeria,
            I've spent the last 3 years honing my skills in frontend development and API engineering.
          </p>
          <p>
            I love working at the intersection of design and engineering — taking ideas from concept to a fully functional product.
            Whether it's a responsive web app or a RESTful API, I care deeply about performance, code quality, and user experience.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source,
            tinkering with robotics projects, or learning about system design and cloud architecture.
          </p>

          {/* Tech I work with */}
          <div className="pt-4">
            <p className="font-mono text-primary text-xs mb-3">Technologies I work with:</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="font-mono text-xs border border-primary/30 text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full hover:border-primary/60 hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                whileHover={{ scale: 1.03, borderColor: "hsl(45 90% 55% / 0.4)" }}
                className="rounded-lg border border-border bg-card p-4 text-center group hover:shadow-[var(--shadow-glow)] transition-all"
                style={{ background: "var(--gradient-card)" }}
              >
                <h.icon size={16} className="text-primary/60 mx-auto mb-2 group-hover:text-primary transition-colors" />
                <p className="font-mono text-primary text-sm font-bold">{h.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative shrink-0 w-56 h-56 md:w-64 md:h-64 mx-auto md:mx-0">
          <motion.div
            className="absolute inset-0 border-2 border-primary/40 rounded-lg translate-x-4 translate-y-4"
            whileHover={{ translateX: 6, translateY: 6 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-lg blur-sm" />
          <img
            src={profileImg}
            alt="Nmesirionye Ngbaronye"
            className="relative rounded-lg w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 border border-primary/20"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
