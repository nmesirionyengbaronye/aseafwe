import AboutSection from "@/components/AboutSection";
import PageShell from "@/components/PageShell";

const About = () => (
  <PageShell title="About" description="Learn about Nmesirionye Ngbaronye, a frontend and API developer studying Mechatronics Engineering at FUTO." path="/about">
    <div className="pt-16"><AboutSection /></div>
  </PageShell>
);

export default About;
