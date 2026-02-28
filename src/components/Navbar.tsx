import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/60 backdrop-blur-md border-b border-border"
      >
        <a href="#" className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={profileImg} alt="Ngbaronye Nmesirionye" />
            <AvatarFallback>NN</AvatarFallback>
          </Avatar>
          <span className="font-mono text-primary text-sm font-bold tracking-wider">
            Ngbaronye N<span className="hidden sm:inline">mesirionye</span><span className="text-muted-foreground">.</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="hidden md:inline-flex text-xs font-mono border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-50 md:hidden bg-card/95 backdrop-blur-lg border-b border-border"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                >
                  <span className="text-primary mr-2">0{i + 1}.</span>
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-mono text-sm border border-primary text-primary px-4 py-3 rounded text-center hover:bg-primary/10 transition-colors mt-2"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
