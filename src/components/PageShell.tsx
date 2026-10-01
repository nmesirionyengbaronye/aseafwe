import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import PageMeta, { StructuredData } from "@/components/PageMeta";
import type { ReactNode } from "react";

/**
 * The starfield is ~800 kB of three.js. Loading it lazily keeps it off the
 * critical path so text content paints immediately on every route.
 */
const SpaceBackground = lazy(() => import("@/components/SpaceBackground"));

type PageShellProps = {
  children: ReactNode;
  title: string;
  description: string;
  path: string;
};

/**
 * Shared chrome for every route: meta tags, structured data, background,
 * navigation, footer and the assistant. The 404 route renders its own shell
 * in pages/NotFound, so it is wired directly in App rather than here.
 */
const PageShell = ({ children, title, description, path }: PageShellProps) => (
  <div className="min-h-screen relative">
    <PageMeta title={title} description={description} path={path} />
    <StructuredData />
    <Suspense fallback={null}>
      <SpaceBackground />
    </Suspense>
    <div className="relative z-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
    <ChatBot />
  </div>
);

export default PageShell;