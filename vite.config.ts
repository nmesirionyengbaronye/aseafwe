import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { buildRobots, buildSitemap } from "./src/lib/seo";

/**
 * Generates `public/sitemap.xml` and `public/robots.txt` before every build.
 *
 * Both are derived from `src/lib/seo.ts`, which reads the same route
 * registry the app renders from, so the sitemap can never fall behind the
 * pages that actually exist.
 */
const generateSeoFiles = () => {
  try {
    const root = path.dirname(fileURLToPath(import.meta.url));
    writeFileSync(path.join(root, "public", "sitemap.xml"), buildSitemap());
    writeFileSync(path.join(root, "public", "robots.txt"), buildRobots());
  } catch {
    // Non-fatal: a dev run without write access should not block the server.
  }
};

generateSeoFiles();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split the heavy, rarely-changing vendors out of the app bundle so
        // content updates do not invalidate the whole cache.
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          ui: [
            "@radix-ui/react-tabs",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-avatar",
            "cmdk",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
          ],
          motion: ["framer-motion"],
          charts: ["recharts"],
        },
      },
    },
  },
}));