import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CompletedProjectsSection from "@/components/CompletedProjectsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CompletedProjectsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
      <ChatBot />
    </div>
  );
};

export default Index;
