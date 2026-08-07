import { motion } from "framer-motion";
import { Award, Trophy, Sparkles, ExternalLink, User, Timer, Mic } from "lucide-react";
import certificate from "@/assets/hacknation-certificate.webp";

const InstLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-primary font-medium underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
  >
    {children}
  </a>
);

const sponsors = [
  { name: "ElevenLabs", url: "https://elevenlabs.io" },
  { name: "Databricks", url: "https://www.databricks.com" },
  { name: "RealPage", url: "https://www.realpage.com" },
  { name: "Maschmeyer Group", url: "https://www.maschmeyer-group.de" },
];

const highlights = [
  {
    icon: Trophy,
    title: "Creativity Recognition",
    detail: (
      <>
        Recognised for creativity of concept and execution at the 6th{" "}
        <InstLink href="https://hack-nation.ai">Hack-Nation</InstLink> Global AI
        Hackathon (July 18–19, 2026) for RIE — Resistance Intelligence Engine.
      </>
    ),
  },
  {
    icon: User,
    title: "Solo Build",
    detail: (
      <>
        Designed, built and shipped the entire project solo — architecture, AI
        pipeline, frontend and integration — with no team to split the work.
      </>
    ),
  },
  {
    icon: Timer,
    title: "24-Hour Sprint",
    detail: (
      <>
        Delivered a working product inside a single 24-hour window, competing
        against global teams while studying at{" "}
        <InstLink href="https://futo.edu.ng">FUTO</InstLink>, Owerri.
      </>
    ),
  },
  {
    icon: Mic,
    title: "Live Pitch — Community Chosen",
    detail: (
      <>
        Selected by the community to pitch live to judges and mentors, presenting
        the concept and demo on stage during the finals.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "AI Engineering Depth",
    detail: (
      <>
        Applied NLP, model orchestration and real-time data pipelines to a novel
        intelligence-engine concept judged by industry mentors.
      </>
    ),
  },
];


const AchievementsSection = () => (
  <section id="achievements" className="py-28 px-6 md:px-12 lg:px-24">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
          <span className="font-mono text-primary text-lg mr-3">05.</span>
          Awards &amp; Recognition

        </h2>
        <div className="h-px w-full bg-border" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.a
          href={certificate}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group block rounded-lg overflow-hidden border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-colors shadow-[var(--shadow-glow)]"
        >
          <img
            src={certificate}
            alt="Hack-Nation Global AI Hackathon #6 certificate of participation awarded to Nmesirionye Ngbaronye for RIE — Resistance Intelligence Engine"
            loading="lazy"
            width={1920}
            height={1358}
            className="w-full bg-white"
          />
          <div className="flex items-center justify-between gap-2 px-4 py-3 border-t border-border">
            <span className="font-mono text-xs text-muted-foreground">
              Certificate ID 4AD2609F8D6094C3
            </span>
            <ExternalLink
              size={14}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </div>
        </motion.a>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/40 rounded-full px-3 py-1 mb-4">
              <Award size={13} />
              Hack-Nation Global AI Hackathon #6
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              RIE — Resistance Intelligence Engine
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A solo build shipped in 24 hours at{" "}
              <InstLink href="https://hack-nation.ai">Hack-Nation</InstLink>&apos;s
              Global AI Hackathon, pitched live after being chosen by the
              community, and recognised for the creativity of the concept and
              execution. Built while studying Mechatronics Engineering at{" "}
              <InstLink href="https://futo.edu.ng">
                Federal University of Technology, Owerri (FUTO)
              </InstLink>
              , originally from{" "}
              <InstLink href="https://abiastate.gov.ng">Abia State</InstLink>,
              Nigeria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="font-mono text-xs text-primary mb-3">Sponsored by:</p>
            <div className="flex flex-wrap gap-2">
              {sponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full hover:border-primary/60 hover:bg-primary/20 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="space-y-5">
            {highlights.map(({ icon: Icon, title, detail }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="shrink-0 mt-1 text-primary">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-sm text-foreground mb-1">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
