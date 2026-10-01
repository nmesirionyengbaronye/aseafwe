import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Briefcase, UserRound, Clock, GraduationCap, Search, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { nowEntries, timelineEntries, workCases } from "@/lib/portfolioContent";
import { site } from "@/lib/site";

const featured = workCases.filter((project) => project.featured).slice(0, 3);
const recentMilestones = timelineEntries.filter((entry) => entry.kind === "Confirmed milestone").slice(-3);

const destinations = [
  { title: "About", detail: "Background, education and engineering perspective.", href: "/about", icon: UserRound },
  { title: "Work", detail: "Every project with its own case study.", href: "/work", icon: Briefcase },
  { title: "Now", detail: "What I am focused on right now.", href: "/now", icon: Clock },
  { title: "Timeline", detail: "Year by year, including what failed.", href: "/timeline", icon: Award },
  { title: "Recognition", detail: "Hack-Nation #6 creativity recognition and live pitch.", href: "/achievements", icon: Award },
  { title: "Writing", detail: "Technical notes and ideas from the external journal.", href: "/writing", icon: BookOpen },
];

const HomeOverview = () => (
  <div className="px-6 md:px-12 lg:px-24 pb-24">
    <div className="max-w-5xl mx-auto space-y-20">

      {/* ---------------------------------------------------------- currently */}
      <section aria-labelledby="currently-heading">
        <div className="border-t border-border pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs text-primary mb-3">CURRENTLY</p>
              <h2 id="currently-heading" className="text-2xl md:text-3xl font-bold text-foreground">
                What I’m working on
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs border border-primary/40 bg-primary/10 text-primary rounded-full px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {site.availability.status}
              </span>
              <span className="font-mono text-xs text-muted-foreground">Updated {site.lastUpdated}</span>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-border border-y border-border">
            {nowEntries.slice(0, 3).map(({ period, heading, detail }) => (
              <div key={heading} className="grid md:grid-cols-[11rem_1fr] gap-4 py-5">
                <p className="font-mono text-xs text-primary pt-1">{period}</p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{heading}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/now" className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:text-primary/80">
            Full Now page<ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------- featured */}
      {featured.length > 0 && (
        <section aria-labelledby="featured-heading">
          <div className="border-t border-border pt-10">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <p className="font-mono text-xs text-primary mb-3">FEATURED WORK</p>
                <h2 id="featured-heading" className="text-2xl md:text-3xl font-bold text-foreground">
                  Three things worth your time
                </h2>
              </div>
              <Link to="/work" className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80">
                All work<ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid gap-px bg-border border border-border rounded-lg overflow-hidden md:grid-cols-3">
              {featured.map((project) => (
                <Link key={project.slug} to={`/work/${project.slug}`} className="group bg-card p-6 flex flex-col min-h-56 hover:bg-muted/40 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-[10px] text-primary border border-primary/30 rounded-full px-2.5 py-1">{project.kind}</span>
                    <ArrowRight size={15} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-4">{project.summary}</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-auto pt-5">{project.role} · {project.status}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --------------------------------------------------------- timeline */}
      <section aria-labelledby="timeline-heading">
        <div className="border-t border-border pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs text-primary mb-3">TIMELINE</p>
              <h2 id="timeline-heading" className="text-2xl md:text-3xl font-bold text-foreground">
                How this happened
              </h2>
            </div>
            <Link to="/timeline" className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80">
              Full timeline<ArrowRight size={15} />
            </Link>
          </div>

          <ol className="border-l border-border max-w-3xl">
            {recentMilestones.map((entry) => (
              <li key={`${entry.year}-${entry.title}`} className="relative pl-7 pb-6 last:pb-0">
                <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <p className="font-mono text-xs text-primary">{entry.year}</p>
                <h3 className="text-base font-semibold text-foreground mt-1.5">{entry.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{entry.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- journal */}
      <section aria-labelledby="journal-heading">
        <div className="border-t border-border pt-10">
          <div className="border border-border rounded-lg p-8" style={{ background: "var(--gradient-card)" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-mono text-xs text-primary mb-3">JOURNAL</p>
                <h2 id="journal-heading" className="text-2xl md:text-3xl font-bold text-foreground">
                  The thinking lives in the journal
                </h2>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Long-form writing — decisions, failures, and what they taught — is published separately at the Nmesirionye Journal. This site stays an index and a summary of the work.
                </p>
                <div className="flex flex-wrap gap-5 mt-6">
                  <a
                    href={site.journalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                  >
                    Visit the journal<ArrowRight size={14} />
                  </a>
                  <Link to="/writing" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    Writing profiles<ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <Lightbulb size={40} className="text-primary/30 shrink-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- explore */}
      <section aria-labelledby="explore-heading">
        <div className="border-t border-border pt-10">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-xs text-primary mb-3">EXPLORE</p>
              <h2 id="explore-heading" className="text-2xl md:text-3xl font-bold text-foreground">Everything else</h2>
            </div>
            <div className="hidden sm:flex items-center gap-5">
              <Link to="/search" className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80">
                <Search size={15} />Search
              </Link>
              <Link to="/education" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary">
                <GraduationCap size={15} />Education
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {destinations.map(({ title, detail, href, icon: Icon }, index) => (
              <motion.div key={href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                <Link to={href} className="group flex min-h-36 flex-col justify-between bg-card p-6 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <Icon size={19} className="text-primary" />
                    <ArrowRight size={15} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
    </div>
  </div>
);

export default HomeOverview;