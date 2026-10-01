import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  List,
  Search as SearchIcon,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site } from "@/lib/site";
import {
  certificates,
  editorialDirectory,
  educationRecord,
  graveyardProjects,
  nowEntries,
  philosophyPrinciples,
  skillGroups,
  timelineEntries,
  workCases,
} from "@/lib/portfolioContent";

const SectionHeading = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) => (
  <header className="max-w-3xl border-b border-border pb-10">
    <p className="font-mono text-xs text-primary mb-4">{eyebrow}</p>
    <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{title}</h1>
    <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>
  </header>
);

const PageFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`px-6 md:px-12 lg:px-24 pt-32 pb-24 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </div>
);

const PageLinks = ({ paths }: { paths: string[] }) => (
  <nav aria-label="Related pages" className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 mt-12">
    {editorialDirectory.filter((entry) => paths.includes(entry.path)).map((entry) => (
      <Link key={entry.path} to={entry.path} className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80">
        {entry.title}<ArrowRight size={14} />
      </Link>
    ))}
  </nav>
);

const contentSections = "mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10";
const sectionTitle = "text-lg font-semibold text-foreground mb-3";
const bodyCopy = "text-sm md:text-base text-muted-foreground leading-relaxed";

/* ------------------------------------------------------------------ now */

const NoSnapshotFallback = ({ children }: { children: string }) => (
  <div className="max-w-2xl border-l border-primary/40 pl-6 py-2">
    <p className="font-mono text-xs text-primary">NOW / ARCHIVE</p>
    <p className={`${bodyCopy} mt-3`}>{children}</p>
  </div>
);

export const NowPage = () => (
  <PageShell title="Now" description="What Nmesirionye Ngbaronye is focused on right now: UniUI, Mechatronics Engineering at FUTO, and client work." path="/now">
    <PageFrame>
      <SectionHeading
        eyebrow="CURRENT SNAPSHOT"
        title="What I’m focused on"
        intro="A short, dated view of what is actually taking my time. If this page is out of date, that is a bug — it should be refreshed, not defended."
      />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 font-mono text-xs border border-primary/40 bg-primary/10 text-primary rounded-full px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {site.availability.status}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          Last updated {site.lastUpdated}
        </span>
      </div>

      <div className="mt-12 flex flex-col divide-y divide-border border-y border-border">
        {nowEntries.map(({ period, heading, detail }) => (
          <article key={heading} className="grid md:grid-cols-[11rem_1fr] gap-4 py-7">
            <p className="font-mono text-xs text-primary pt-1">{period}</p>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
              <p className={`${bodyCopy} mt-2 max-w-2xl`}>{detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <section className="border-t border-primary/50 pt-5">
          <p className="font-mono text-xs text-primary">01 / FLAGSHIP</p>
          <h2 className="text-xl font-semibold text-foreground mt-3">UniUI</h2>
          <p className={`${bodyCopy} mt-3`}>Academic intelligence built around sources, retrieval, verification and confidence.</p>
          <Link to="/work/uniui" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Read the case study<ArrowRight size={14} /></Link>
        </section>
        <section className="border-t border-primary/50 pt-5">
          <p className="font-mono text-xs text-primary">02 / CONTEXT</p>
          <h2 className="text-xl font-semibold text-foreground mt-3">The full arc</h2>
          <p className={`${bodyCopy} mt-3`}>Year by year, including the parts that did not work and what they taught.</p>
          <Link to="/timeline" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Open the timeline<ArrowRight size={14} /></Link>
        </section>
        <section className="border-t border-primary/50 pt-5">
          <p className="font-mono text-xs text-primary">03 / ARCHIVE</p>
          <h2 className="text-xl font-semibold text-foreground mt-3">Earlier snapshots</h2>
          <p className={`${bodyCopy} mt-3`}>Past versions of this page, kept rather than overwritten.</p>
          <Link to="/now/archive" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Snapshot archive<ArrowRight size={14} /></Link>
        </section>
      </div>

      <PageLinks paths={["/work", "/timeline", "/contact", "/now/archive"]} />
    </PageFrame>
  </PageShell>
);

export const NowArchivePage = () => (
  <PageShell title="Now Archive" description="Past versions of the Now page from Nmesirionye Ngbaronye's portfolio." path="/now/archive">
    <PageFrame>
      <SectionHeading
        eyebrow="NOW / ARCHIVE"
        title="Snapshots over time"
        intro="Each entry is a dated snapshot that was true at the time. Earlier versions are kept as they were written rather than edited to look better."
      />

      <div className="mt-12 max-w-2xl border-l border-primary/40 pl-6 py-2">
        <p className="font-mono text-xs text-primary">LATEST SNAPSHOT</p>
        <h2 className={`${sectionTitle} mt-3`}>October 2026</h2>
        <p className={bodyCopy}>
          UniUI in build, Mechatronics Engineering at FUTO in progress, six client products delivered and live, and open to freelance work with full-time roles in view from 2027.
        </p>
        <Link to="/now" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">View current snapshot<ArrowRight size={14} /></Link>
      </div>

      <div className="mt-10 border-y border-border py-8">
        <p className="font-mono text-xs text-muted-foreground">NO EARLIER SNAPSHOTS</p>
        <p className={`${bodyCopy} mt-3 max-w-2xl`}>
          This archive is not backdated. Earlier entries get added when they are real — the page started after the work, so the work before it is recorded on the timeline instead.
        </p>
        <Link to="/timeline" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">See the timeline instead<ArrowRight size={14} /></Link>
      </div>

      <PageLinks paths={["/now", "/timeline"]} />
    </PageFrame>
  </PageShell>
);

export const TimelinePage = () => (
  <PageShell title="Timeline" description="A year-by-year record of Nmesirionye Ngbaronye's work, including failures and direction, from 2024 onward." path="/timeline">
    <PageFrame>
      <SectionHeading
        eyebrow="MILESTONES"
        title="A record of the work"
        intro="Year by year. What was built, what failed, and what each of those taught. Entries marked as direction are stated intentions, not completed work."
      />

      <ol className="mt-12 max-w-3xl border-l border-border">
        {timelineEntries.map(({ year, title, detail, kind, href }, index) => (
          <li key={`${year}-${title}`} className={`relative pl-8 ${index < timelineEntries.length - 1 ? "pb-10" : ""}`}>
            <span
              className={`absolute -left-1.5 top-1.5 h-3 w-3 rounded-full ring-4 ring-background ${
                kind === "Confirmed milestone"
                  ? "bg-primary"
                  : kind === "Current phase"
                    ? "bg-primary/50"
                    : "border border-primary bg-background"
              }`}
            />
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs text-primary">{year}</p>
              <span className="font-mono text-[10px] uppercase tracking-wider border border-border rounded-full px-2 py-0.5 text-muted-foreground">
                {kind}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mt-2">{title}</h2>
            <p className={`${bodyCopy} mt-3`}>{detail}</p>
            {href && (
              <Link to={href} className="inline-flex items-center gap-2 mt-4 text-sm text-primary">
                See the certificate and recognition<ArrowRight size={14} />
              </Link>
            )}
          </li>
        ))}
      </ol>

      <PageLinks paths={["/now", "/education", "/achievements", "/work", "/philosophy"]} />
    </PageFrame>
  </PageShell>
);

/* ------------------------------------------------------------ education */

export const EducationPage = () => (
  <PageShell
    title="Education"
    description="Education profile for Nmesirionye Ngbaronye, a Mechatronics Engineering student at FUTO in Owerri, Nigeria."
    path="/education"
  >
    <PageFrame>
      <SectionHeading
        eyebrow="EDUCATION"
        title="Engineering across disciplines"
        intro="My degree is Mechatronics Engineering. Most of what I build for a living is software, and the two inform each other more than the degree titles suggest."
      />

      <article className="mt-12 max-w-3xl border-y border-border py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-primary">UNIVERSITY STUDIES · IN PROGRESS</p>
            <h2 className="text-2xl font-semibold text-foreground mt-2">{educationRecord.degree}</h2>
            <p className="text-sm text-muted-foreground mt-2">{educationRecord.institution}, Nigeria</p>
          </div>
          <a href={educationRecord.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary">
            FUTO website<ArrowUpRight size={14} />
          </a>
        </div>
        <p className={`${bodyCopy} mt-5`}>{educationRecord.detail}</p>

        <div className="mt-8">
          <p className="font-mono text-xs text-primary mb-4">RELEVANT COURSEWORK</p>
          <div className="flex flex-wrap gap-2">
            {educationRecord.coursework.map((item) => (
              <span key={item} className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="mt-12 max-w-3xl">
        <h2 className={`${sectionTitle}`}>Certifications and continuing study</h2>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {certificates.map((item) => (
            <li key={item.name} className="flex items-start gap-4 py-4">
              <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid sm:grid-cols-2 gap-8">
        <section>
          <h2 className={sectionTitle}>Practice alongside study</h2>
          <p className={bodyCopy}>
            The documented work spans web platforms, API services, AI prototypes and robotics. The software work is not a break from the degree — control systems, embedded design and data structures all show up in it.
          </p>
        </section>
        <section>
          <h2 className={sectionTitle}>Related pages</h2>
          <div className="flex flex-col gap-3">
            <Link to="/skills" className="text-sm text-primary">Skills and technologies</Link>
            <Link to="/timeline" className="text-sm text-primary">Timeline</Link>
            <Link to="/work" className="text-sm text-primary">Project work</Link>
          </div>
        </section>
      </div>

      <PageLinks paths={["/about", "/skills", "/timeline", "/uses"]} />
    </PageFrame>
  </PageShell>
);

/* ----------------------------------------------------------- philosophy */

export const PhilosophyPage = () => (
  <PageShell
    title="Philosophy"
    description="Working principles behind Nmesirionye Ngbaronye's decisions: education over shortcuts, truth over false certainty, and never rewriting history."
    path="/philosophy"
  >
    <PageFrame>
      <SectionHeading
        eyebrow="WORKING PRINCIPLES"
        title="What I believe about building"
        intro="These are decisions I have actually made and been corrected by, not a manifesto. Each one came from something that went wrong first."
      />

      <div className="mt-12 divide-y divide-border border-y border-border">
        {philosophyPrinciples.map((item, index) => (
          <article key={item.title} className="grid md:grid-cols-[5rem_1fr] gap-4 py-7">
            <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
              <p className={`${bodyCopy} mt-2 max-w-2xl`}>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 border-l-2 border-primary/50 pl-6 py-2 max-w-2xl">
        <p className="font-mono text-xs text-primary">THE HONEST PART</p>
        <p className={`${bodyCopy} mt-3`}>
          The tendency here is expansion before consolidation — starting a new direction before the last few are genuinely real. That is a real weakness, not a strength to reframe, and it is the reason the graveyard page exists.
        </p>
        <Link to="/work/graveyard" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">
          See what I abandoned and why<ArrowRight size={14} />
        </Link>
      </div>

      <PageLinks paths={["/about", "/work", "/timeline", "/work/graveyard"]} />
    </PageFrame>
  </PageShell>
);

/* ---------------------------------------------------------------- press */

export const PressPage = () => (
  <PageShell
    title="Press"
    description="Press and media information for Nmesirionye Ngbaronye, with a confirmed Hack-Nation recognition and contact route."
    path="/press"
  >
    <PageFrame>
      <SectionHeading
        eyebrow="PRESS & MEDIA"
        title="Recognition and media enquiries"
        intro="What is actually documented, and how to get in touch about it. No independent press coverage is claimed because there is none yet."
      />

      <article className="mt-12 grid md:grid-cols-[1fr_auto] gap-8 border-y border-border py-8">
        <div>
          <p className="font-mono text-xs text-primary">DOCUMENTED RECOGNITION · JULY 2026</p>
          <h2 className="text-2xl font-semibold text-foreground mt-3">Hack-Nation Global AI Hackathon #6</h2>
          <p className={`${bodyCopy} mt-4 max-w-2xl`}>
            RIE was built solo in 24 hours, selected by the community for a live pitch, and recognised for creativity of concept and execution. Certificate ID 4AD2609F8D6094C3.
          </p>
          <Link to="/achievements" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">
            View award details<ArrowRight size={14} />
          </Link>
        </div>
        <a href="https://hack-nation.ai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary self-start">
          Hack-Nation<ArrowUpRight size={14} />
        </a>
      </article>

      <section className="mt-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className={sectionTitle}>Short bio</h2>
          <p className={bodyCopy}>
            Nmesirionye Ngbaronye is an AI and Mechatronics Engineer, and a Mechatronics Engineering undergraduate at the Federal University of Technology, Owerri. He builds applied AI systems and the web platforms that ship them: six client storefront and booking platforms delivered and live, and RIE — Resistance Intelligence Engine — built solo in a 24-hour global AI hackathon, where he was recognised for creativity of concept and execution. His current focus is UniUI, an academic intelligence system built around sources, retrieval and honest confidence.
          </p>
        </div>
        <div>
          <h2 className={sectionTitle}>Media enquiries</h2>
          <p className={bodyCopy}>
            For anything about frontend engineering, API development, AI prototypes or the RIE hackathon project, the contact page is the fastest route. Media enquiries are answered.
          </p>
          <Button asChild className="mt-5"><Link to="/contact">Contact Nmesirionye</Link></Button>
        </div>
      </section>

      <PageLinks paths={["/achievements", "/work", "/contact", "/legacy"]} />
    </PageFrame>
  </PageShell>
);

/* --------------------------------------------------------------- legacy */

export const LegacyPage = () => (
  <PageShell title="Legacy" description="What this portfolio is for, what it preserves, and how it is meant to be maintained." path="/legacy">
    <PageFrame>
      <SectionHeading
        eyebrow="AN OPEN RECORD"
        title="What this site is for"
        intro="A portfolio built as a record rather than a flyer. The distinction matters: a flyer is edited to look good, a record is edited to stay accurate."
      />

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <section className="border-t border-primary/50 pt-5">
          <p className="font-mono text-xs text-primary">01 / PRODUCTS</p>
          <h2 className="text-xl font-semibold text-foreground mt-3">Useful things in the world</h2>
          <p className={`${bodyCopy} mt-3`}>
            Client storefronts and a campus facility-booking platform show software making a service easier to discover and use.
          </p>
        </section>
        <section className="border-t border-primary/50 pt-5">
          <p className="font-mono text-xs text-primary">02 / EXPERIMENTS</p>
          <h2 className="text-xl font-semibold text-foreground mt-3">Questions worth exploring</h2>
          <p className={`${bodyCopy} mt-3`}>
            Open-source builds, RIE and the hackathon lab document experiments across AI, data, APIs and rapid prototyping.
          </p>
        </section>
        <section className="border-t border-primary/50 pt-5">
          <p className="font-mono text-xs text-primary">03 / LEARNING</p>
          <h2 className="text-xl font-semibold text-foreground mt-3">A path in progress</h2>
          <p className={`${bodyCopy} mt-3`}>
            Mechatronics Engineering at FUTO alongside software work that is turning an ambition into evidence.
          </p>
        </section>
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className={sectionTitle}>Maintenance plan</h2>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {[
            ["/now is refreshed, not accumulated", "A snapshot is only useful while it is current. When focus changes, the page changes, and the old version moves to /now/archive."],
            ["The timeline is append-only", "Milestones are added when they happen. Entries are never rewritten to look better, and failures stay."],
            ["The graveyard grows too", "Anything abandoned gets recorded with the reason and the lesson. Judgement is shown, not just wins."],
            ["The journal keeps the detail", "Long-form writing lives at the journal. This site stays an index and a summary, never a duplicate archive."],
          ].map(([title, detail]) => (
            <li key={title} className="py-5">
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className={`${bodyCopy} mt-2`}>{detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className={sectionTitle}>Privacy and visitor data</h2>
        <p className={`${bodyCopy} mt-4`}>
          The live visitor badge counts open tabs. Each one joins with a random id held
          only in that tab&apos;s <code className="font-mono text-xs text-foreground">sessionStorage</code>,
          which is discarded when the tab closes. Nothing is written to a durable store.
        </p>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {[
            ["Not collected", "IP addresses, user agents, device or hardware fingerprints, canvas fingerprints, cookies, or anything identifying a person."],
            ["Not stored", "Presence is ephemeral. No visitor history, no profile, no cross-session identifier, no cross-site tracking."],
            ["Visible to you", "The number of open tabs and which route each is viewing. Sessions are labelled “You” or “Anonymous visitor”."],
            ["Runs locally", "With no presence backend configured the badge is simply not rendered. No number is ever invented."],
          ].map(([title, detail]) => (
            <li key={title} className="py-4">
              <h3 className="font-mono text-xs text-primary">{title.toUpperCase()}</h3>
              <p className={`${bodyCopy} mt-2`}>{detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 border-t border-border pt-6">
        <p className={bodyCopy}>The next meaningful chapter is the next thing built, learned and shared.</p>
        <Link to="/work" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Explore the work<ArrowRight size={14} /></Link>
      </div>

      <PageLinks paths={["/timeline", "/now", "/writing", "/philosophy", "/work/graveyard"]} />
    </PageFrame>
  </PageShell>
);

/* ----------------------------------------------------------------- uses */

export const UsesPage = () => (
  <PageShell title="Uses" description="Frontend, API, DevOps and robotics technologies listed in Nmesirionye Ngbaronye's portfolio." path="/uses">
    <PageFrame>
      <SectionHeading
        eyebrow="TOOLS & TECHNOLOGIES"
        title="The tools in my portfolio"
        intro="A practical index of the technologies across this site. Not a claim that every tool appears on every project — the project pages show what was actually used."
      />

      <div className="mt-10 flex flex-col divide-y divide-border border-y border-border">
        {skillGroups.map(({ group, tools }) => (
          <section key={group} className="grid md:grid-cols-[12rem_1fr] gap-4 py-6">
            <h2 className="font-mono text-sm text-primary">{group}</h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="font-mono text-xs text-foreground border border-border rounded-full px-3 py-1">{tool}</span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className={`${bodyCopy} mt-6`}>
        The <Link to="/skills" className="text-primary underline underline-offset-4">skills page</Link> has the interactive categorized view. The <Link to="/work" className="text-primary underline underline-offset-4">work pages</Link> show which tools each project actually used.
      </p>

      <PageLinks paths={["/skills", "/work", "/education"]} />
    </PageFrame>
  </PageShell>
);

/* ------------------------------------------------------------- graveyard */

export const GraveyardPage = () => (
  <PageShell title="Project Graveyard" description="Paused, retired and abandoned approaches by Nmesirionye Ngbaronye, with the reason and the lesson." path="/work/graveyard">
    <PageFrame>
      <SectionHeading
        eyebrow="WORK / GRAVEYARD"
        title="What I abandoned, and why"
        intro="Only wins make a portfolio dishonest. This page records the approaches that did not survive, the reason each one failed, and what it actually taught."
      />

      <div className="mt-12 flex flex-col gap-8 max-w-3xl">
        {graveyardProjects.map((item) => (
          <article key={item.title} className="border border-border rounded-lg p-7 bg-card" style={{ background: "var(--gradient-card)" }}>
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-red-400 mt-1 shrink-0" />
              <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
            </div>
            <div className="mt-5 grid gap-5">
              <div className="border-l-2 border-red-400/40 pl-5">
                <p className="font-mono text-xs text-red-400 mb-2">WHY IT ENDED</p>
                <p className={bodyCopy}>{item.reason}</p>
              </div>
              <div className="border-l-2 border-emerald-400/40 pl-5">
                <p className="font-mono text-xs text-emerald-400 mb-2">WHAT IT TAUGHT</p>
                <p className={bodyCopy}>{item.lesson}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 max-w-2xl">
        <p className="font-mono text-xs text-muted-foreground">ADDING TO THIS PAGE</p>
        <p className={`${bodyCopy} mt-3`}>
          Anything paused or abandoned gets an entry here with its reason and its lesson. An empty graveyard on a portfolio this size would be the least credible page on the site.
        </p>
        <Link to="/work" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">
          View active projects<ArrowRight size={14} />
        </Link>
      </div>

      <PageLinks paths={["/work", "/now", "/philosophy"]} />
    </PageFrame>
  </PageShell>
);

/* ---------------------------------------------------------------- search */

export const SearchPage = () => {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalized) return [];
    const match = (haystack: string) => haystack.toLowerCase().includes(normalized);

    const pages = editorialDirectory
      .filter((entry) => match(`${entry.title} ${entry.description} ${entry.path}`))
      .map((entry) => ({ title: entry.title, description: entry.description, path: entry.path, label: "PAGE" }));

    const projects = workCases
      .filter((project) => match(`${project.title} ${project.summary} ${project.category} ${project.technologies.join(" ")} ${project.features.join(" ")}`))
      .map((project) => ({ title: project.title, description: project.summary, path: `/work/${project.slug}`, label: project.kind.toUpperCase() }));

    const timeline = timelineEntries
      .filter((entry) => match(`${entry.year} ${entry.title} ${entry.detail}`))
      .map((entry) => ({ title: `${entry.year} — ${entry.title}`, description: entry.detail, path: "/timeline", label: "TIMELINE" }));

    const principles = philosophyPrinciples
      .filter((item) => match(`${item.title} ${item.detail}`))
      .map((item) => ({ title: item.title, description: item.detail, path: "/philosophy", label: "PRINCIPLE" }));

    return [...pages, ...projects, ...timeline, ...principles];
  }, [normalized]);

  return (
    <PageShell title="Search" description="Search every page, project and timeline entry in Nmesirionye Ngbaronye's portfolio." path="/search">
      <PageFrame>
        <SectionHeading
          eyebrow="PORTFOLIO INDEX"
          title="Search the site"
          intro="Find a page, project, technology, principle or year across the whole portfolio."
        />

        <form className="mt-8 max-w-2xl" role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="portfolio-search" className="sr-only">Search pages and projects</label>
          <div className="flex gap-2">
            <Input
              id="portfolio-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try “RIE”, “React”, “verification”, or “2026”"
              className="h-12"
            />
            <Button type="submit" size="icon" aria-label="Search"><SearchIcon size={18} /></Button>
          </div>
        </form>

        <div className="mt-10 max-w-3xl" aria-live="polite">
          {!normalized ? (
            <p className={bodyCopy}>
              Search across {editorialDirectory.length} pages, {workCases.length} projects and {timelineEntries.length} timeline entries.
            </p>
          ) : results.length === 0 ? (
            <p className={bodyCopy}>No results for “{query.trim()}”. Try a project name, technology, year or page title.</p>
          ) : (
            <>
              <p className="font-mono text-xs text-muted-foreground mb-4">
                {results.length} RESULT{results.length === 1 ? "" : "S"}
              </p>
              <ul className="divide-y divide-border border-y border-border">
                {results.map((result) => (
                  <li key={`${result.label}-${result.path}-${result.title}`} className="py-5">
                    <Link to={result.path} className="group flex items-start justify-between gap-5">
                      <span>
                        <span className="font-mono text-[10px] text-primary">{result.label}</span>
                        <span className="block text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">{result.title}</span>
                        <span className="block text-sm text-muted-foreground mt-2 leading-relaxed">{result.description}</span>
                      </span>
                      <ArrowRight size={16} className="mt-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <PageLinks paths={["/work", "/writing", "/contact"]} />
      </PageFrame>
    </PageShell>
  );
};

/* ------------------------------------------------------- project detail */

const statusTone: Record<string, string> = {
  Shipped: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Building: "text-primary bg-primary/10 border-primary/30",
  "Early concept": "text-muted-foreground bg-muted/40 border-border",
};

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = workCases.find((item) => item.slug === slug);

  if (!project) {
    return (
      <PageShell title="Project not found" description="This project could not be found in the portfolio." path="/work">
        <PageFrame>
          <SectionHeading eyebrow="WORK / NOT FOUND" title="Project not found" intro="This project page is not in the portfolio. Browse all work to find what you were looking for." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><Link to="/work">Browse all work</Link></Button>
            <Button asChild variant="outline"><Link to="/search">Search the site</Link></Button>
          </div>
        </PageFrame>
      </PageShell>
    );
  }

  const path = `/work/${project.slug}`;
  const related = workCases.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <PageShell
      title={project.title}
      description={`${project.summary} Project details from the portfolio of Nmesirionye Ngbaronye.`}
      path={path}
    >
      <PageFrame>
        <p className="font-mono text-xs text-primary mb-4">
          <Link to="/work" className="hover:underline">WORK</Link> / {project.kind.toUpperCase()}
        </p>

        <header className="max-w-4xl border-b border-border pb-10">
          <p className="text-sm text-muted-foreground">{project.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3">{project.title}</h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{project.overview}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className={`inline-flex items-center gap-1.5 font-mono text-xs border rounded-full px-3 py-1.5 ${statusTone[project.status]}`}>
              <CheckCircle size={11} />{project.status}
            </span>
            <span className="font-mono text-xs text-foreground border border-border rounded-full px-3 py-1.5">{project.role}</span>
            <span className="font-mono text-xs text-foreground border border-border rounded-full px-3 py-1.5">
              {project.period ?? "Period not published"}
            </span>
          </div>
        </header>

        {project.periodNote && (
          <p className="mt-6 font-mono text-xs text-muted-foreground max-w-3xl">{project.periodNote}</p>
        )}

        <div className="grid md:grid-cols-[minmax(0,1fr)_18rem] gap-12 mt-12">
          <div>
            <section>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={16} className="text-red-400" />
                <h2 className={sectionTitle}>The problem</h2>
              </div>
              <p className={bodyCopy}>{project.problem}</p>
            </section>

            <section className="mt-10">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={16} className="text-emerald-400" />
                <h2 className={sectionTitle}>The approach</h2>
              </div>
              <p className={bodyCopy}>{project.solution}</p>
            </section>

            {project.features.length > 0 && (
              <section className="mt-10">
                <div className="flex items-center gap-2 mb-3">
                  <List size={16} className="text-primary" />
                  <h2 className={sectionTitle}>Key features</h2>
                </div>
                <ul className={`${bodyCopy} space-y-3`}>
                  {project.features.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.recognition && (
              <section className="mt-10 border-l-2 border-primary/50 pl-5">
                <h2 className={sectionTitle}>Recognition</h2>
                <p className={bodyCopy}>{project.recognition}</p>
                <Link to="/achievements" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">
                  See certificate and event context<ArrowRight size={14} />
                </Link>
              </section>
            )}

            {project.technologies.length > 0 && (
              <section className="mt-10">
                <h2 className={sectionTitle}>Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tool) => (
                    <span key={tool} className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">{tool}</span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="md:border-l md:border-border md:pl-7">
            <h2 className="font-mono text-xs text-muted-foreground mb-4">PROJECT DETAILS</h2>
            <dl className="flex flex-col gap-4">
              {[
                ["Kind", project.kind],
                ["Category", project.category],
                ["Role", project.role],
                ["Status", project.status],
                ["Period", project.period ?? "Not published"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{label}</dt>
                  <dd className="text-sm text-foreground mt-1">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="font-mono text-xs text-muted-foreground mt-8 mb-4">LINKS</h2>
            <div className="flex flex-col gap-3">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary">
                  Open live project<ExternalLink size={14} />
                </a>
              )}
              {project.source && (
                <a href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary">
                  View source repository<ExternalLink size={14} />
                </a>
              )}
              {!project.live && !project.source && (
                <p className={bodyCopy}>No public live or source link for this project yet.</p>
              )}
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-16 border-t border-border pt-8">
            <h2 className="font-mono text-xs text-muted-foreground mb-6">MORE WORK</h2>
            <div className="grid sm:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
              {related.map((item) => (
                <Link key={item.slug} to={`/work/${item.slug}`} className="group bg-card p-5 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <Sparkles size={15} className="text-primary/60" />
                    <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-3">{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-14 flex flex-wrap gap-5 border-t border-border pt-6">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary">
            <ArrowRight size={15} className="rotate-180" />All projects
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-primary">
            Discuss a project<ArrowRight size={14} />
          </Link>
        </div>
      </PageFrame>
    </PageShell>
  );
};

/* -------------------------------------------------------- writing feature */

export const WritingFeature = () => (
  <div className="mt-10 border-y border-border py-7">
    <p className="font-mono text-xs text-primary mb-3">
      <BookOpen size={14} className="inline mr-2" />JOURNAL
    </p>
    <h2 className="text-xl font-semibold text-foreground">Writing lives in its own home</h2>
    <p className={`${bodyCopy} mt-3 max-w-2xl`}>
      The Nmesirionye Journal is a separate publication. Visit it for the writing itself; this portfolio remains an introduction and directory, not a duplicate archive.
    </p>
    <a href={site.journalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">
      Visit the journal<ExternalLink size={14} />
    </a>
    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
      {[site.social.hashnode, site.social.medium, site.social.devto].map((url) => (
        <a key={url} href={url} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-primary">
          {new URL(url).hostname.replace("www.", "")}
        </a>
      ))}
    </div>
  </div>
);