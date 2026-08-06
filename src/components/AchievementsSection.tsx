import { motion } from "framer-motion";
import { Award, Trophy, Sparkles, ExternalLink, Users, Globe } from "lucide-react";
import certificate from "@/assets/hacknation-certificate.png.asset.json";

const highlights = [
  {
    icon: Trophy,
    title: "Creativity Recognition",
    detail:
      "Recognised for creative problem-solving at the 6th Hack-Nation Global AI Hackathon (July 18–19, 2026) for RIE — Resistance Intelligence Engine.",
  },
  {
    icon: Globe,
    title: "Global AI Hackathon",
    detail:
      "Competed in a worldwide, 48-hour AI build sprint backed by ElevenLabs, Databricks, RealPage and the Maschmeyer Group.",
  },
  {
    icon: Users,
    title: "Team Delivery Under Pressure",
    detail:
      "Shipped a working AI product and live pitch inside two days — architecture, frontend, and API integration end to end.",
  },
  {
    icon: Sparkles,
    title: "AI Engineering Depth",
    detail:
      "Applied NLP, model orchestration and real-time data pipelines to a novel intelligence-engine concept judged by industry mentors.",
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
          href={certificate.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group block rounded-lg overflow-hidden border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-colors shadow-[var(--shadow-glow)]"
        >
          <img
            src={certificate.url}
            alt="Hack-Nation Global AI Hackathon #6 certificate of participation awarded to Nmesirionye Ngbaronye for RIE — Resistance Intelligence Engine"
            loading="lazy"
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
              Built and pitched an AI intelligence engine during Hack-Nation&apos;s
              global hackathon alongside builders from around the world, and was
              recognised for the creativity of the concept and execution.
            </p>
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
