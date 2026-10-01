import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Work from "./pages/Work";
import Achievements from "./pages/Achievements";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Writing from "./pages/Writing";
import {
  NowPage,
  NowArchivePage,
  TimelinePage,
  EducationPage,
  PhilosophyPage,
  PressPage,
  LegacyPage,
  UsesPage,
  GraveyardPage,
  SearchPage,
  ProjectDetailPage,
} from "./pages/PortfolioPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          {/* Static segment must precede the :slug catch-all. */}
          <Route path="/work/graveyard" element={<GraveyardPage />} />
          <Route path="/work/:slug" element={<ProjectDetailPage />} />
          <Route path="/now" element={<NowPage />} />
          <Route path="/now/archive" element={<NowArchivePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/uses" element={<UsesPage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;