import CompletedProjectsSection from "@/components/CompletedProjectsSection";
import PageShell from "@/components/PageShell";
import ProjectsSection from "@/components/ProjectsSection";

const Work = () => (
  <PageShell title="Work" description="Explore client products and open-source software built by frontend and API developer Nmesirionye Ngbaronye." path="/work">
    <div className="pt-16">
      <CompletedProjectsSection />
      <ProjectsSection />
    </div>
  </PageShell>
);

export default Work;
