import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
        a question, or just want to say hello — my inbox is always open.
      </p>
      <a
        href="mailto:hello@example.com"
        className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors"
      >
        <Mail size={16} />
        Say Hello
      </a>
    </motion.div>
  </section>
);

export default ContactSection;
