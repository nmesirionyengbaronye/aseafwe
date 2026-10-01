import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { Code2, Cpu, Globe, Rocket, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";

const highlights = [
  { label: "Discipline", value: "Mechatronics Eng.", icon: Cpu },
  { label: "Focus", value: "AI & Mechatronics", icon: Code2 },
  { label: "Location", value: "Nigeria", icon: Globe },
  { label: "Origin", value: "Umuahia, Abia", icon: Rocket },
];

const techStack = ["Python", "React", "TypeScript", "Node.js", "Arduino", "Docker"];

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
            </a>, Nigeria. I work at the seam between two disciplines: I build
            applied AI systems — NLP pipelines, retrieval, verification — and the web
            platforms that put them in front of people.
          </p>
          <p>
            My degree is Mechatronics Engineering, which is where the embedded and
            control side comes from. What I actually spend most of my time on is applied
            AI: retrieval infrastructure, verification, NLP pipelines — and the frontend
            work required to make any of it usable. UniUI is where both meet.
          </p>
          <p>
            When I'm not building, I'm writing about it in the journal, or pushing on
            robotics and embedded work where the engineering is physical rather than
            purely digital.
          </p>

          {/* Cross-links to the rest of the portfolio */}
          <div className="pt-4">
            <p className="font-mono text-primary text-xs mb-3">Keep reading</p>
            <div className="flex flex-wrap gap-2">
              {[
                ["Timeline", "/timeline"],
                ["Philosophy", "/philosophy"],
                ["Education", "/education"],
                ["Work", "/work"],
                ["Now", "/now"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="font-mono text-xs border border-primary/30 text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full hover:border-primary/60 hover:bg-primary/10 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <a
                href={site.journalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs border border-primary/30 text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full hover:border-primary/60 hover:bg-primary/10 transition-colors"
              >
                Journal<ExternalLink size={11} />
              </a>
            </div>
          </div>

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
