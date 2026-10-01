import AboutSection from "@/components/AboutSection";
import PageShell from "@/components/PageShell";

const About = () => (
  <PageShell title="About" description="About Nmesirionye Ngbaronye, an AI and Mechatronics Engineer and Mechatronics Engineering undergraduate at FUTO, Owerri." path="/about">
    <div className="pt-16"><AboutSection /></div>
  </PageShell>
);

export default About;
