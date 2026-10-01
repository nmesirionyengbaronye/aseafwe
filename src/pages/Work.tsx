import PageShell from "@/components/PageShell";
import CompletedProjectsSection from "@/components/CompletedProjectsSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Archive } from "lucide-react";
import { workCases } from "@/lib/portfolioContent";

const clientWork = workCases.filter((project) => project.kind === "Client work");
const productsAndOpenSource = workCases.filter((project) => project.kind !== "Client work");

const Work = () => (
  <PageShell
    title="Work"
    description="Every project by Nmesirionye Ngbaronye with its own case study: the problem, the approach, the role, the status and the links."
    path="/work"
  >
    <div className="pt-16">
      <CompletedProjectsSection projects={clientWork} />
      <ProjectsSection projects={productsAndOpenSource} />

      <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto pb-24">
        <div className="border border-border rounded-lg p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ background: "var(--gradient-card)" }}>
          <div className="flex items-start gap-4">
            <Archive size={22} className="text-primary shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-foreground">What didn’t work</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xl">
                A portfolio of only wins is not a record. Paused and abandoned approaches are published with the reason and the lesson.
              </p>
            </div>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/work/graveyard">Open the graveyard</Link>
          </Button>
        </div>
      </section>
    </div>
  </PageShell>
);

export default Work;