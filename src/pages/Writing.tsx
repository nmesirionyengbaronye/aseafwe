import { ArrowUpRight, BookOpen, Code2, Newspaper } from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const profiles = [
  { label: "Hashnode", href: site.social.hashnode, icon: Code2 },
  { label: "Medium", href: site.social.medium, icon: Newspaper },
  { label: "DEV Community", href: site.social.devto, icon: BookOpen },
];

const Writing = () => (
  <PageShell title="Writing" description="Technical writing and engineering notes by Nmesirionye Ngbaronye, with links to the Nmesirionye Journal and publishing profiles." path="/writing">
    <section className="min-h-[calc(100vh-5rem)] px-6 md:px-12 lg:px-24 pt-32 pb-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <p className="font-mono text-xs text-primary mb-5">WRITING &amp; FIELD NOTES</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-3xl leading-tight">Ideas that deserve more than a code comment.</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          The Nmesirionye Journal is the home for my technical notes, lessons from building, and ideas across software, AI and robotics.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={site.journalUrl} target="_blank" rel="noreferrer">Visit the journal <ArrowUpRight /></a>
          </Button>
        </div>
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground mb-4">ALSO FIND MY WRITING ON</p>
          <div className="grid sm:grid-cols-3 border border-border rounded-lg overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-border">
            {profiles.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 bg-card p-5 hover:bg-muted/40 transition-colors">
                <span className="flex items-center gap-3 text-sm text-foreground"><Icon size={18} className="text-primary" />{label}</span>
                <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Writing;