import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Twitter, Send, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const templates = [
  {
    label: "Project opportunity",
    text: "Hi Ngbaronye,\n\nI came across your portfolio and I'm really impressed by the quality of your work, especially your frontend development and API engineering projects. I have an exciting project opportunity that I believe aligns perfectly with your skill set, and I'd love to discuss the details with you.\n\nThe project involves building a modern web application with a strong focus on performance, accessibility, and beautiful UI design. I think your experience with React, TypeScript, and API development would be a great fit.\n\nWould you be available for a call or meeting sometime this week to discuss the scope, timeline, and compensation? I'm flexible with scheduling and happy to work around your availability.\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]",
  },
  {
    label: "Freelance hiring",
    text: "Hi Ngbaronye,\n\nI'm reaching out because I'm looking for a talented freelance developer for an upcoming project, and your portfolio really stood out to me. The craftsmanship and attention to detail in your work is exactly what we're looking for.\n\nWe're a [company/startup] working on [brief project description], and we need a skilled frontend and API developer to help us build and ship key features. The engagement would involve React/TypeScript development, API integration, and ensuring a polished, responsive user experience.\n\nI'd love to discuss the full scope of work, expected timeline, budget, and any other details with you. We're open to both hourly and project-based arrangements, depending on what works best for you.\n\nCould we schedule a brief introductory call to explore this further? Please let me know your availability and preferred rate.\n\nThank you for your time!\n\nBest,\n[Your Name]",
  },
  {
    label: "Portfolio question",
    text: "Hi Ngbaronye,\n\nI've been exploring your portfolio and I'm genuinely impressed by the range and depth of your projects — from the MarketAI dashboard to the Emotional Support Model, each one demonstrates a strong command of modern web technologies and thoughtful design.\n\nI had a few questions I was hoping you could help me with. I'm particularly curious about the tech stack and architecture decisions behind some of your projects. For example, how did you approach the API design and data flow in your dashboard projects? And what was your experience like integrating AI/NLP models into web applications?\n\nI'm a fellow developer looking to learn and grow, and any insights you could share would be incredibly valuable. I'd also love to know if you're open to collaborating on open-source projects or mentoring.\n\nThanks so much for your time, and keep up the amazing work!\n\nCheers,\n[Your Name]",
  },
];

const contacts = [
  { label: "Email", icon: Mail, value: "nmesirionyengbaronye@gmail.com", href: "mailto:nmesirionyengbaronye@gmail.com", cta: "Send Email", hasTemplates: true },
  { label: "WhatsApp", icon: MessageCircle, value: "07040369525", href: "https://wa.me/2347040369525", cta: "Chat on WhatsApp", hasTemplates: true },
  { label: "Telegram", icon: Send, value: "07040369525", href: "https://t.me/+2347040369525", cta: "Chat on Telegram", hasTemplates: false },
  { label: "GitHub", icon: Github, value: "Panther0508", href: "https://github.com/Panther0508", cta: "Visit GitHub", hasTemplates: false },
  { label: "X", icon: Twitter, value: "@Pantherlord0508", href: "https://x.com/Pantherlord0508", cta: "Visit X", hasTemplates: false },
];

const buildHref = (contact: typeof contacts[0], templateText?: string) => {
  if (!templateText) return contact.href;
  if (contact.label === "Email") {
    return `mailto:${contact.value}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(templateText)}`;
  }
  if (contact.label === "WhatsApp") {
    return `https://wa.me/2347040369525?text=${encodeURIComponent(templateText)}`;
  }
  return contact.href;
};

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-2xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
      >
        <Sparkles size={14} className="text-primary" />
        <span className="font-mono text-xs text-primary">Available for work</span>
      </motion.div>

      <p className="font-mono text-primary text-sm mb-4">06. What's Next?</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Get In Touch</h2>
      <p className="text-muted-foreground leading-relaxed mb-10">
        I'm currently open to new opportunities and collaborations. Whether you have a project in mind,
        a question, or just want to say hello — reach out through any channel below.
      </p>

      <Tabs defaultValue="Email" className="w-full">
        <TabsList className="bg-muted/50 border border-border mb-6 flex-wrap h-auto gap-1 p-1">
          {contacts.map((c) => (
            <TabsTrigger
              key={c.label}
              value={c.label}
              className="font-mono text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-1.5"
            >
              <c.icon size={12} />
              {c.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {contacts.map((c) => (
          <TabsContent key={c.label} value={c.label}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg p-8 border border-border bg-card flex flex-col items-center gap-4 hover:border-primary/30 hover:shadow-[var(--shadow-glow)] transition-all"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <c.icon size={24} className="text-primary" />
              </div>
              <p className="font-mono text-foreground text-sm">{c.value}</p>

              {c.hasTemplates && (
                <div className="w-full space-y-2 my-2">
                  <p className="text-xs font-mono text-muted-foreground mb-2">Quick message templates:</p>
                  {templates.map((t) => (
                    <a
                      key={t.label}
                      href={buildHref(c, t.text)}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-left text-sm font-mono text-muted-foreground border border-border rounded px-4 py-2.5 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              )}

              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors"
              >
                {c.cta}
              </a>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  </section>
);

export default ContactSection;
