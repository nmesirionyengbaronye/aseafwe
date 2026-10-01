import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { editorialDirectory } from "@/lib/portfolioContent";

const suggestions = [
  ["Work", "/work"],
  ["Now", "/now"],
  ["Timeline", "/timeline"],
  ["Search", "/search"],
] as const;

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <PageShell
      title="Page not found"
      description={`The page ${pathname} could not be found on Nmesirionye Ngbaronye's portfolio.`}
      path="/404"
    >
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-primary mb-5">ERROR 404</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">Not found.</h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            There is no page at <code className="font-mono text-sm text-foreground">{pathname}</code>.
            It may have moved, or it may never have existed.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/">Return home</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/search">Search the site</Link></Button>
          </div>

          <nav aria-label="Suggested pages" className="mt-14 border-t border-border pt-8">
            <p className="font-mono text-xs text-muted-foreground mb-5">TRY ONE OF THESE</p>
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
              {suggestions.map(([label, href]) => (
                <Link key={href} to={href} className="bg-card px-5 py-4 text-sm text-foreground hover:bg-muted/40 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-6">
              Or browse the full{" "}
              <Link to="/search" className="text-primary hover:underline">site index of {editorialDirectory.length} pages</Link>.
            </p>
          </nav>
        </div>
      </section>
    </PageShell>
  );
};

export default NotFound;