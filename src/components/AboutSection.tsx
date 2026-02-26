import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
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

      <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
        <p>
          Hello! I'm Ngbaronye, a passionate developer who enjoys building things that live on the internet.
          My focus is on creating clean, efficient frontends and well-designed APIs that power great user experiences.
        </p>
        <p>
          I love working at the intersection of design and engineering — taking ideas from concept to a fully functional product.
          Whether it's a responsive web app or a RESTful API, I care deeply about performance, code quality, and user experience.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source, or learning about system design and architecture.
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
