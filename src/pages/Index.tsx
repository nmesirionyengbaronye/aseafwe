import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import HomeOverview from "@/components/HomeOverview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import PageMeta, { StructuredData } from "@/components/PageMeta";
import { site } from "@/lib/site";

/**
 * three.js is only needed for the decorative starfield. Loading it lazily
 * keeps ~800 kB off the critical path while the hero copy paints first.
 */
const SpaceBackground = lazy(() => import("@/components/SpaceBackground"));

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Suspense fallback={null}>
        <SpaceBackground />
      </Suspense>
      <PageMeta
        title={site.role}
        description="Portfolio of Nmesirionye Ngbaronye, an AI and Mechatronics Engineer building applied AI systems and web platforms, and a Mechatronics Engineering undergraduate at FUTO, Owerri."
        path="/"
      />
      <StructuredData />
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