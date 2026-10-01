import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Search as SearchIcon, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site } from "@/lib/site";
import { editorialDirectory, workCases } from "@/lib/portfolioContent";

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

export const NowPage = () => (
  <PageShell title="Now" description="A current portfolio snapshot of Nmesirionye Ngbaronye, based only on confirmed professional and project details." path="/now">
    <PageFrame>
      <SectionHeading eyebrow="CURRENT SNAPSHOT" title="What I’m focused on" intro="A concise view of the work and direction represented across this portfolio. Personal priorities and a dated status update will be added when confirmed." />
      <div className={contentSections}>
        <section><h2 className={sectionTitle}>Building for the web</h2><p className={bodyCopy}>My portfolio documents frontend and API work across client storefronts, campus facility booking, and open-source projects. I care about taking an idea through to a usable, published experience.</p></section>
        <section><h2 className={sectionTitle}>Exploring AI and robotics</h2><p className={bodyCopy}>My work also includes RIE, an AI intelligence-engine concept, alongside my Mechatronics Engineering studies at the Federal University of Technology, Owerri.</p></section>
        <section><h2 className={sectionTitle}>A growing portfolio</h2><p className={bodyCopy}>The work index brings together six delivered client platforms and open-source builds, with live and source links wherever they are available.</p><Link to="/work" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Browse the work<ArrowRight size={14} /></Link></section>
        <section><h2 className={sectionTitle}>A dated update</h2><p className={bodyCopy}>No dated personal update has been provided yet, so this page avoids guessing at current roles, goals, or day-to-day activities.</p><Link to="/now/archive" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Snapshot archive<ArrowRight size={14} /></Link></section>
      </div>
      <PageLinks paths={["/work", "/skills", "/education", "/now/archive", "/contact"]} />
    </PageFrame>
  </PageShell>
);

export const NowArchivePage = () => (
  <PageShell title="Now Archive" description="Archive of dated portfolio snapshots from Nmesirionye Ngbaronye." path="/now/archive">
    <PageFrame>
      <SectionHeading eyebrow="NOW / ARCHIVE" title="Snapshots over time" intro="A dated archive only makes sense when each entry reflects a real update. No earlier dated Now snapshots have been confirmed for publication." />
      <div className="mt-12 max-w-2xl border-l border-primary/40 pl-6 py-1">
        <p className="font-mono text-xs text-primary">ARCHIVE STATUS</p>
        <h2 className={`${sectionTitle} mt-3`}>No archived snapshots yet</h2>
        <p className={bodyCopy}>This section is ready to hold future dated updates. It does not backdate or reinterpret the portfolio as a personal status log.</p>
        <Link to="/now" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">View current snapshot<ArrowRight size={14} /></Link>
      </div>
      <PageLinks paths={["/now", "/timeline"]} />
    </PageFrame>
  </PageShell>
);

export const TimelinePage = () => (
  <PageShell title="Timeline" description="A verified timeline of portfolio milestones, including the 2026 Hack-Nation Global AI Hackathon." path="/timeline">
    <PageFrame>
      <SectionHeading eyebrow="MILESTONES" title="A record of the work" intro="A small, evidence-led timeline. Only a dated milestone supplied for this portfolio is shown; no project dates or employment history are inferred." />
      <ol className="mt-12 max-w-3xl border-l border-border">
        <li className="relative pl-8 pb-10">
          <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
          <p className="font-mono text-xs text-primary">JULY 18–19, 2026</p>
          <h2 className="text-xl font-semibold text-foreground mt-2">Hack-Nation Global AI Hackathon #6</h2>
          <p className={`${bodyCopy} mt-3`}>Built RIE solo during a 24-hour sprint, was chosen by the community to pitch live, and received creativity recognition for the concept and execution.</p>
          <Link to="/achievements" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">See the certificate and recognition<ArrowRight size={14} /></Link>
        </li>
        <li className="relative pl-8">
          <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border border-primary bg-background" />
          <p className="font-mono text-xs text-muted-foreground">ONGOING — NO START DATE PUBLISHED</p>
          <h2 className="text-xl font-semibold text-foreground mt-2">Mechatronics Engineering at FUTO</h2>
          <p className={`${bodyCopy} mt-3`}>The portfolio identifies Nmesirionye as a Mechatronics Engineering student at the Federal University of Technology, Owerri. Dates and degree-completion details are not stated.</p>
        </li>
      </ol>
      <PageLinks paths={["/education", "/achievements", "/work"]} />
    </PageFrame>
  </PageShell>
);

export const EducationPage = () => (
  <PageShell title="Education" description="Education profile for Nmesirionye Ngbaronye, a Mechatronics Engineering student at FUTO in Owerri, Nigeria." path="/education">
    <PageFrame>
      <SectionHeading eyebrow="EDUCATION" title="Engineering across disciplines" intro="My studies in Mechatronics Engineering sit alongside practical work in frontend development, APIs, AI, and robotics." />
      <article className="mt-12 max-w-3xl border-y border-border py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div><p className="font-mono text-xs text-primary">UNIVERSITY STUDIES</p><h2 className="text-2xl font-semibold text-foreground mt-2">Mechatronics Engineering</h2></div>
          <a href="https://futo.edu.ng" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary">FUTO website<ArrowUpRight size={14} /></a>
        </div>
        <p className={`${bodyCopy} mt-4`}>Federal University of Technology, Owerri (FUTO), Nigeria. The portfolio does not publish attendance dates, expected graduation, degree status, grades, or coursework, so none are assumed here.</p>
      </article>
      <div className="mt-10 grid sm:grid-cols-2 gap-8">
        <section><h2 className={sectionTitle}>Practice alongside study</h2><p className={bodyCopy}>The documented projects include web platforms, API-oriented software, an AI hackathon build, and robotics interests—work that connects digital systems with engineering practice.</p></section>
        <section><h2 className={sectionTitle}>Related pages</h2><div className="flex flex-col gap-3"><Link to="/skills" className="text-sm text-primary">Skills and technologies</Link><Link to="/timeline" className="text-sm text-primary">Timeline</Link><Link to="/work" className="text-sm text-primary">Project work</Link></div></section>
      </div>
      <PageLinks paths={["/about", "/skills", "/timeline"]} />
    </PageFrame>
  </PageShell>
);

export const PhilosophyPage = () => (
  <PageShell title="Philosophy" description="Working principles reflected in the portfolio projects of Nmesirionye Ngbaronye." path="/philosophy">
    <PageFrame>
      <SectionHeading eyebrow="WORKING PRINCIPLES" title="Build with intent" intro="These principles are drawn from the kinds of projects represented here—not claims about a formal company manifesto." />
      <div className="mt-12 divide-y divide-border border-y border-border">
        {[
          ["Make the idea usable", "A product is more than a concept. The work should help someone understand what it does and find a clear next step."],
          ["Keep the experience clear", "Storefronts, booking flows, and dashboards all depend on people finding what they need without unnecessary friction."],
          ["Learn by shipping", "Hackathons and prototypes create a reason to make decisions, integrate the pieces, and show a working result under real constraints."],
          ["Treat engineering as connected", "Frontend work, APIs, AI experiments, and mechatronics can inform one another instead of living in isolated boxes."],
        ].map(([title, text], index) => <article key={title} className="grid md:grid-cols-[5rem_1fr] gap-4 py-7"><span className="font-mono text-sm text-primary">0{index + 1}</span><div><h2 className="text-xl font-semibold text-foreground">{title}</h2><p className={`${bodyCopy} mt-2 max-w-2xl`}>{text}</p></div></article>)}
      </div>
      <PageLinks paths={["/about", "/work", "/skills"]} />
    </PageFrame>
  </PageShell>
);

export const PressPage = () => (
  <PageShell title="Press" description="Press and media information for Nmesirionye Ngbaronye, with a confirmed Hack-Nation recognition and contact route." path="/press">
    <PageFrame>
      <SectionHeading eyebrow="PRESS & MEDIA" title="Recognition and media enquiries" intro="This page records the public recognition currently documented in the portfolio. No independent press articles, interviews, or media features have been supplied." />
      <article className="mt-12 grid md:grid-cols-[1fr_auto] gap-8 border-y border-border py-8">
        <div><p className="font-mono text-xs text-primary">DOCUMENTED RECOGNITION · JULY 2026</p><h2 className="text-2xl font-semibold text-foreground mt-3">Hack-Nation Global AI Hackathon #6</h2><p className={`${bodyCopy} mt-4 max-w-2xl`}>RIE was built solo in 24 hours, selected by the community for a live pitch, and recognised for creativity of concept and execution. A certificate and event details are available on the awards page.</p><Link to="/achievements" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">View award details<ArrowRight size={14} /></Link></div>
        <a href="https://hack-nation.ai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary self-start">Hack-Nation<ArrowUpRight size={14} /></a>
      </article>
      <div className="mt-8 max-w-2xl"><h2 className={sectionTitle}>Media enquiries</h2><p className={bodyCopy}>For a conversation about frontend engineering, APIs, AI prototypes, or the RIE hackathon project, use the contact page.</p><Button asChild className="mt-5"><Link to="/contact">Contact Nmesirionye</Link></Button></div>
      <PageLinks paths={["/achievements", "/work", "/contact"]} />
    </PageFrame>
  </PageShell>
);

export const LegacyPage = () => (
  <PageShell title="Legacy" description="A living record of projects, learning, and public contributions by Nmesirionye Ngbaronye." path="/legacy">
    <PageFrame>
      <SectionHeading eyebrow="AN OPEN RECORD" title="Still being built" intro="A legacy is something earned over time. This page is a record of work already documented—not a claim that the story is finished." />
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <section className="border-t border-primary/50 pt-5"><p className="font-mono text-xs text-primary">01 / PRODUCTS</p><h2 className="text-xl font-semibold text-foreground mt-3">Useful things in the world</h2><p className={`${bodyCopy} mt-3`}>Client storefronts and a campus facility-booking platform show how software can make a service easier to discover and use.</p></section>
        <section className="border-t border-primary/50 pt-5"><p className="font-mono text-xs text-primary">02 / EXPERIMENTS</p><h2 className="text-xl font-semibold text-foreground mt-3">Questions worth exploring</h2><p className={`${bodyCopy} mt-3`}>Open-source projects and RIE document experiments across AI, data, APIs, frontend systems, and rapid prototyping.</p></section>
        <section className="border-t border-primary/50 pt-5"><p className="font-mono text-xs text-primary">03 / LEARNING</p><h2 className="text-xl font-semibold text-foreground mt-3">A path in progress</h2><p className={`${bodyCopy} mt-3`}>Mechatronics Engineering studies and hands-on software work remain part of an ongoing learning journey.</p></section>
      </div>
      <div className="mt-12 border-t border-border pt-6"><p className={bodyCopy}>The most meaningful next chapter is the next thing built, learned, and shared.</p><Link to="/work" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Explore the work<ArrowRight size={14} /></Link></div>
      <PageLinks paths={["/timeline", "/writing", "/contact"]} />
    </PageFrame>
  </PageShell>
);

const knownTools = [
  { group: "Frontend", tools: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "Framer Motion"] },
  { group: "API & Backend", tools: ["Python", "Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"] },
  { group: "Tools & DevOps", tools: ["Git", "Docker", "CI/CD", "Vite", "Figma", "Postman"] },
  { group: "Robotics", tools: ["Arduino", "Raspberry Pi", "Embedded C", "Sensors & Actuators", "PCB Design", "3D Printing"] },
];

export const UsesPage = () => (
  <PageShell title="Uses" description="Frontend, API, DevOps, and robotics technologies listed in Nmesirionye Ngbaronye's portfolio." path="/uses">
    <PageFrame>
      <SectionHeading eyebrow="TOOLS & TECHNOLOGIES" title="The tools in my portfolio" intro="A practical index of the technologies listed across this site. It is not a claim that every tool is used on every project." />
      <div className="mt-10 flex flex-col divide-y divide-border border-y border-border">
        {knownTools.map(({ group, tools }) => <section key={group} className="grid md:grid-cols-[12rem_1fr] gap-4 py-6"><h2 className="font-mono text-sm text-primary">{group}</h2><div className="flex flex-wrap gap-x-5 gap-y-3">{tools.map((tool) => <span key={tool} className="text-sm text-foreground">{tool}</span>)}</div></section>)}
      </div>
      <p className={`${bodyCopy} mt-6`}>Explore the <Link to="/skills" className="text-primary underline underline-offset-4">skills page</Link> for the interactive categorized view and project examples.</p>
      <PageLinks paths={["/skills", "/work", "/education"]} />
    </PageFrame>
  </PageShell>
);

export const GraveyardPage = () => (
  <PageShell title="Project Graveyard" description="A transparent archive of paused or retired projects; no abandoned projects have been confirmed yet." path="/work/graveyard">
    <PageFrame>
      <SectionHeading eyebrow="WORK / ARCHIVE" title="The project graveyard" intro="Not every experiment becomes a finished product. This page is reserved for projects the creator confirms as paused or retired." />
      <div className="mt-12 max-w-2xl border-l-2 border-primary/50 pl-6 py-2"><p className="font-mono text-xs text-primary">NO PROJECTS PUBLISHED</p><h2 className={`${sectionTitle} mt-3`}>Nothing retired has been confirmed</h2><p className={bodyCopy}>Rather than label unfinished work as abandoned, this archive will stay empty until specific projects and their status are confirmed.</p><Link to="/work" className="inline-flex items-center gap-2 mt-5 text-sm text-primary">View active portfolio projects<ArrowRight size={14} /></Link></div>
      <PageLinks paths={["/work", "/now"]} />
    </PageFrame>
  </PageShell>
);

export const SearchPage = () => {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalized) return [];
    const pages = editorialDirectory.filter((entry) => `${entry.title} ${entry.description} ${entry.path}`.toLowerCase().includes(normalized)).map((entry) => ({ title: entry.title, description: entry.description, path: entry.path, label: "PAGE" }));
    const projects = workCases.filter((project) => `${project.title} ${project.overview} ${project.category} ${project.technologies.join(" ")}`.toLowerCase().includes(normalized)).map((project) => ({ title: project.title, description: project.overview, path: `/work/${project.slug}`, label: project.kind.toUpperCase() }));
    return [...pages, ...projects];
  }, [normalized]);
  return (
    <PageShell title="Search" description="Search the portfolio pages and project details of Nmesirionye Ngbaronye." path="/search">
      <PageFrame>
        <SectionHeading eyebrow="PORTFOLIO INDEX" title="Search the site" intro="Find a page, project, technology, or topic across the portfolio." />
        <form className="mt-8 max-w-2xl" role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="portfolio-search" className="sr-only">Search pages and projects</label>
          <div className="flex gap-2"><Input id="portfolio-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “RIE”, “React”, or “education”" className="h-12" /><Button type="submit" size="icon" aria-label="Search"><SearchIcon size={18} /></Button></div>
        </form>
        <div className="mt-10 max-w-3xl" aria-live="polite">
          {!normalized ? <p className={bodyCopy}>Search across {editorialDirectory.length} pages and {workCases.length} project records.</p> : results.length === 0 ? <p className={bodyCopy}>No results for “{query.trim()}”. Try a project name, page title, or technology.</p> : <><p className="font-mono text-xs text-muted-foreground mb-4">{results.length} RESULT{results.length === 1 ? "" : "S"}</p><ul className="divide-y divide-border border-y border-border">{results.map((result) => <li key={result.path} className="py-5"><Link to={result.path} className="group flex items-start justify-between gap-5"><span><span className="font-mono text-[10px] text-primary">{result.label}</span><span className="block text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">{result.title}</span><span className="block text-sm text-muted-foreground mt-2 leading-relaxed">{result.description}</span></span><ArrowRight size={16} className="mt-5 shrink-0 text-muted-foreground group-hover:text-primary" /></Link></li>)}</ul></>}
        </div>
        <PageLinks paths={["/work", "/writing", "/contact"]} />
      </PageFrame>
    </PageShell>
  );
};

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = workCases.find((item) => item.slug === slug);
  if (!project) return <PageShell title="Project not found" description="This project could not be found in the portfolio." path="/work"><PageFrame><SectionHeading eyebrow="WORK / NOT FOUND" title="Project not found" intro="This project page is not in the portfolio. Browse all work to find a project." /><Button asChild className="mt-8"><Link to="/work">Browse all work</Link></Button></PageFrame></PageShell>;
  const path = `/work/${project.slug}`;
  return (
    <PageShell title={project.title} description={`${project.overview} Project details from the portfolio of Nmesirionye Ngbaronye.`} path={path}>
      <PageFrame>
        <p className="font-mono text-xs text-primary mb-4"><Link to="/work" className="hover:underline">WORK</Link> / {project.kind.toUpperCase()}</p>
        <header className="max-w-4xl border-b border-border pb-10"><p className="text-sm text-muted-foreground">{project.category}</p><h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3">{project.title}</h1><p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{project.overview}</p></header>
        <div className="grid md:grid-cols-[minmax(0,1fr)_18rem] gap-12 mt-10">
          <div>
            <section><h2 className={sectionTitle}>Project overview</h2><p className={bodyCopy}>This entry expands on the project summary already represented in the portfolio. The description focuses on its intended audience, core experience, and published scope; it does not claim unverified usage or business outcomes.</p></section>
            <section className="mt-10"><h2 className={sectionTitle}>Scope and focus</h2><ul className="space-y-3">{project.scope.map((item) => <li key={item} className={`${bodyCopy} flex gap-3`}><span className="text-primary mt-0.5">—</span><span>{item}</span></li>)}</ul></section>
            {project.recognition && <section className="mt-10 border-l-2 border-primary/50 pl-5"><h2 className={sectionTitle}>Recognition</h2><p className={bodyCopy}>{project.recognition}</p><Link to="/achievements" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">See certificate and event context<ArrowRight size={14} /></Link></section>}
            <section className="mt-10"><h2 className={sectionTitle}>Technologies</h2><div className="flex flex-wrap gap-x-5 gap-y-3">{project.technologies.map((tool) => <span key={tool} className="font-mono text-xs text-primary">{tool}</span>)}</div></section>
          </div>
          <aside className="md:border-l md:border-border md:pl-7"><h2 className="font-mono text-xs text-muted-foreground mb-4">PROJECT LINKS</h2><div className="flex flex-col gap-3">{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary">Open live project<ExternalLink size={14} /></a>}{project.source && <a href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary">View source repository<ExternalLink size={14} /></a>}{!project.live && !project.source && <p className={bodyCopy}>No public live or source link is listed for this project.</p>}</div><div className="mt-8 border-t border-border pt-5"><p className="font-mono text-xs text-muted-foreground">CATEGORY</p><p className="text-sm text-foreground mt-2">{project.category}</p></div></aside>
        </div>
        <div className="mt-14 flex flex-wrap gap-5 border-t border-border pt-6"><Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary"><ArrowDownRight size={15} />All projects</Link><Link to="/contact" className="inline-flex items-center gap-2 text-sm text-primary">Discuss a project<ArrowRight size={14} /></Link></div>
      </PageFrame>
    </PageShell>
  );
};

export const WritingFeature = () => (
  <div className="mt-10 border-y border-border py-7"><p className="font-mono text-xs text-primary mb-3"><BookOpen size={14} className="inline mr-2" />JOURNAL</p><h2 className="text-xl font-semibold text-foreground">Writing lives in its own home</h2><p className={`${bodyCopy} mt-3 max-w-2xl`}>The Nmesirionye Journal is a separate publication. Visit it for the writing itself; this portfolio remains an introduction and directory, not a duplicate archive.</p><a href={site.journalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-primary">Visit the journal<ExternalLink size={14} /></a><div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">{[site.social.hashnode, site.social.medium, site.social.devto].map((url) => <a key={url} href={url} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-primary">{new URL(url).hostname.replace("www.", "")}</a>)}</div></div>
);