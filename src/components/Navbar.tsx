import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link, NavLink } from "react-router-dom";
import { primaryNav } from "@/lib/portfolioContent";

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
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Avatar className="h-8 w-8">
            <AvatarImage src={profileImg} alt="Nmesirionye Ngbaronye" />
            <AvatarFallback>NN</AvatarFallback>
          </Avatar>
          <span className="font-mono text-primary text-sm font-bold tracking-wider">
            Nmesirionye <span className="hidden sm:inline">Ngbaronye</span><span className="text-muted-foreground">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {primaryNav.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `hidden md:block text-sm hover:text-primary transition-colors font-mono ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="hidden md:inline-flex text-xs font-mono border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors"
          >
            Contact
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-50 md:hidden max-h-[calc(100vh-65px)] overflow-y-auto bg-card/95 backdrop-blur-lg border-b border-border"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {[{ label: "Home", href: "/" }, ...primaryNav].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={() => setOpen(false)}
                    end={link.href === "/"}
                    className={({ isActive }) =>
                      `block font-mono text-sm hover:text-primary transition-colors py-2 border-b border-border/50 ${isActive ? "text-primary" : "text-muted-foreground"}`
                    }
                  >
                    <span className="text-primary mr-2">{String(i + 1).padStart(2, "0")}.</span>{link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="font-mono text-sm border border-primary text-primary px-4 py-3 rounded text-center hover:bg-primary/10 transition-colors mt-2"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;