import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  { label: "Experience", value: "2+ Years" },
  { label: "University", value: "FUTO (Mechatronics)" },
  { label: "Location", value: "Nigeria" },
  { label: "Origin", value: "Umuahia, Abia" },
];

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
            Hello! I'm Ngbaronye Nmesirionye, a passionate developer and Mechatronics Engineering student at the
            <span className="text-primary font-medium"> Federal University of Technology, Owerri (FUTO)</span>.
            Originally from <span className="text-primary font-medium">Umuahia, Abia State, Nigeria</span>,
            I've spent the last 2+ years honing my skills in frontend development and API engineering.
          </p>
          <p>
            I love working at the intersection of design and engineering — taking ideas from concept to a fully functional product.
            Whether it's a responsive web app or a RESTful API, I care deeply about performance, code quality, and user experience.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source,
            tinkering with robotics projects, or learning about system design and cloud architecture.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-lg border border-border bg-card p-3 text-center" style={{ background: "var(--gradient-card)" }}>
                <p className="font-mono text-primary text-sm font-bold">{h.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative shrink-0 w-56 h-56 md:w-64 md:h-64 mx-auto md:mx-0">
          <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4" />
          <img
            src={profileImg}
            alt="Ngbaronye Nmesirionye"
            className="relative rounded-lg w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
