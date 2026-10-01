import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Twitter, Send, Sparkles, Linkedin, BookOpen, Newspaper, Code2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { site } from "@/lib/site";

const templates = [
  {
    label: "Project opportunity",
    text: "Hi Nmesirionye,\n\nI came across your portfolio and I'm really impressed by the quality of your work, especially your frontend development and API engineering projects. I have an exciting project opportunity that I believe aligns perfectly with your skill set, and I'd love to discuss the details with you.\n\nThe project involves building a modern web application with a strong focus on performance, accessibility, and beautiful UI design. I think your experience with React, TypeScript, and API development would be a great fit.\n\nWould you be available for a call or meeting sometime this week to discuss the scope, timeline, and compensation? I'm flexible with scheduling and happy to work around your availability.\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]",
  },
  {
    label: "Freelance hiring",
    text: "Hi Nmesirionye,\n\nI'm reaching out because I'm looking for a talented freelance developer for an upcoming project, and your portfolio really stood out to me. The craftsmanship and attention to detail in your work is exactly what we're looking for.\n\nWe're a [company/startup] working on [brief project description], and we need a skilled engineer to help us build and ship key features. The engagement would involve React/TypeScript development, API integration, and ensuring a polished, responsive user experience.\n\nI'd love to discuss the full scope of work, expected timeline, budget, and any other details with you. We're open to both hourly and project-based arrangements, depending on what works best for you.\n\nCould we schedule a brief introductory call to explore this further? Please let me know your availability and preferred rate.\n\nThank you for your time!\n\nBest,\n[Your Name]",
  },
  {
    label: "Collaboration",
    text: "Hi Nmesirionye,\n\nI'm [name/role] and I'm reaching out about [UniUI / a project / a robotics or AI idea].\n\nWhat I'm working on: [brief description].\n\nWhat I'd need from you: [e.g. technical architecture, an AI pipeline, a frontend build, a systems design review].\n\nTimeline and scope: [details].\n\nI saw you work on retrieval, verification and applied AI systems and thought the approach was directly relevant. Happy to share more context.\n\nBest,\n[Your Name]",
  },
  {
    label: "Portfolio question",
    text: "Hi Nmesirionye,\n\nI've been exploring your portfolio and I'm genuinely impressed by the range and depth of your work — from RIE and UniUI to the emotional support model and IntentScope, each one shows real command of both the engineering and the product side.\n\nI had a few questions. I'm particularly curious about how you approach retrieval and verification in academic AI systems, and how you decide when a model should be made to say it isn't sure. I'm also interested in how you balance Mechatronics Engineering study with shipping this volume of work.\n\nI'm a fellow engineer and any insight you could share would be genuinely valuable. I'd also love to know if you're open to collaboration or mentoring.\n\nThanks for your time, and keep building.\n\nCheers,\n[Your Name]",
  },
];

const contacts = [
  { label: "Email", icon: Mail, value: site.email, href: `mailto:${site.email}`, cta: "Send Email", hasTemplates: true },
  { label: "WhatsApp", icon: MessageCircle, value: site.whatsapp, href: `https://wa.me/234${site.whatsapp.replace(/^0/, "")}`, cta: "Chat on WhatsApp", hasTemplates: true },
  { label: "Telegram", icon: Send, value: site.whatsapp, href: `https://t.me/+234${site.whatsapp.replace(/^0/, "")}`, cta: "Chat on Telegram", hasTemplates: false },
  { label: "GitHub", icon: Github, value: site.social.github.replace("https://", ""), href: site.social.github, cta: "Visit GitHub", hasTemplates: false },
  { label: "LinkedIn", icon: Linkedin, value: site.social.linkedin.replace("https://www.", ""), href: site.social.linkedin, cta: "Connect on LinkedIn", hasTemplates: false },
  { label: "X", icon: Twitter, value: "@nmesirionye_n", href: site.social.x, cta: "Visit X", hasTemplates: false },
  { label: "Hashnode", icon: Code2, value: "@nmesirionyengbaronye", href: site.social.hashnode, cta: "Read on Hashnode", hasTemplates: false },
  { label: "Medium", icon: Newspaper, value: "@nmesirionyengbaronye", href: site.social.medium, cta: "Read on Medium", hasTemplates: false },
  { label: "DEV", icon: BookOpen, value: "@nmesirionyengbaronye", href: site.social.devto, cta: "Read on DEV", hasTemplates: false },
];

const buildHref = (contact: (typeof contacts)[number], templateText?: string) => {
  if (!templateText) return contact.href;
  if (contact.label === "Email") {
    return `mailto:${site.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(templateText)}`;
  }
  if (contact.label === "WhatsApp") {
    return `https://wa.me/234${site.whatsapp.replace(/^0/, "")}?text=${encodeURIComponent(templateText)}`;
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
        <span className="font-mono text-xs text-primary">{site.availability.status}</span>
      </motion.div>

      <p className="font-mono text-primary text-sm mb-4">Get In Touch</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Let’s build something.</h2>
      <p className="text-muted-foreground leading-relaxed mb-10">
        {site.availability.detail} Whether you have a project in mind, a question, or just
        want to say hello — reach out through any channel below.
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
