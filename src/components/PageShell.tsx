import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import ChatBot from "@/components/ChatBot";
import PageMeta from "@/components/PageMeta";

type PageShellProps = {
  children: ReactNode;
  title: string;
  description: string;
  path: string;
};

const PageShell = ({ children, title, description, path }: PageShellProps) => (
  <div className="min-h-screen relative">
    <PageMeta title={title} description={description} path={path} />
    <SpaceBackground />
    <div className="relative z-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
    <ChatBot />
  </div>
);

export default PageShell;
