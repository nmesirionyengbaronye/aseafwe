import { motion } from "framer-motion";
import { Mail, Phone, Github, Twitter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const contacts = [
  { label: "Email", icon: Mail, value: "nmesirionyengbaronye@gmail.com", href: "mailto:nmesirionyengbaronye@gmail.com" },
  { label: "Phone", icon: Phone, value: "07040369525", href: "tel:07040369525" },
  { label: "GitHub", icon: Github, value: "Panther0508", href: "https://github.com/Panther0508" },
  { label: "X", icon: Twitter, value: "@Pantherlord0508", href: "https://x.com/Pantherlord0508" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-2xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-mono text-primary text-sm mb-4">04. What's Next?</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Get In Touch</h2>
      <p className="text-muted-foreground leading-relaxed mb-10">
        I'm currently open to new opportunities and collaborations. Whether you have a project in mind,
        a question, or just want to say hello — reach out through any channel below.
      </p>

      <Tabs defaultValue="Email" className="w-full">
        <TabsList className="bg-muted/50 border border-border mb-6">
          {contacts.map((c) => (
            <TabsTrigger
              key={c.label}
              value={c.label}
              className="font-mono text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {c.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {contacts.map((c) => (
          <TabsContent key={c.label} value={c.label}>
            <div className="rounded-lg p-8 border border-border bg-card flex flex-col items-center gap-4" style={{ background: "var(--gradient-card)" }}>
              <c.icon size={28} className="text-primary" />
              <p className="font-mono text-foreground text-sm">{c.value}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors"
              >
                {c.label === "Email" ? "Send Email" : c.label === "Phone" ? "Call Me" : `Visit ${c.label}`}
              </a>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  </section>
);

export default ContactSection;
