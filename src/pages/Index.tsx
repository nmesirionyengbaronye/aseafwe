import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import ChatBot from "@/components/ChatBot";
import HomeOverview from "@/components/HomeOverview";
import PageMeta from "@/components/PageMeta";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <PageMeta title="Frontend & API Developer" description="Portfolio of Nmesirionye Ngbaronye, a frontend and API developer building polished web products, APIs and AI applications." path="/" />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <HomeOverview />
        <Footer />
      </div>
      <ChatBot />
    </div>
  );
};

export default Index;
