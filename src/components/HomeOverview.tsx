import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Briefcase, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  { title: "About", detail: "Background, education and engineering perspective.", href: "/about", icon: UserRound },
  { title: "Work", detail: "Six delivered client products and open-source builds.", href: "/work", icon: Briefcase },
  { title: "Recognition", detail: "Hack-Nation #6 creativity recognition and live pitch.", href: "/achievements", icon: Award },
  { title: "Writing", detail: "Technical notes and ideas from the external journal.", href: "/writing", icon: BookOpen },
];

const HomeOverview = () => (
  <section className="px-6 md:px-12 lg:px-24 pb-24" aria-labelledby="explore-heading">
    <div className="max-w-5xl mx-auto border-t border-border pt-14">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="font-mono text-xs text-primary mb-3">EXPLORE THE PORTFOLIO</p>
          <h2 id="explore-heading" className="text-2xl md:text-3xl font-bold text-foreground">Work, craft and progress.</h2>
        </div>
        <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80">
          Start a conversation <ArrowRight size={15} />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
        {destinations.map(({ title, detail, href, icon: Icon }, index) => (
          <motion.div key={href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <Link to={href} className="group flex min-h-40 flex-col justify-between bg-card p-6 hover:bg-muted/40 transition-colors">
              <div className="flex items-center justify-between">
                <Icon size={20} className="text-primary" />
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeOverview;
