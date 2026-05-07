import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-gradient-to-r from-koa-dark via-koa-green to-[#2A7A54] border-b border-white/20",
          isScrolled ? "py-2 shadow-xl" : "py-4 shadow-lg"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="KOA Engineering"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.name === "Contact" ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-display uppercase tracking-widest text-sm px-6 py-2.5 rounded-sm transition-all duration-300 bg-koa-accent text-koa-dark font-bold shadow-md hover:shadow-[0_0_20px_rgba(168,197,176,0.4)] hover:scale-105"
                  )}
                >
                  Contact Us
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-display uppercase tracking-widest text-sm transition-colors relative group",
                    location.pathname === link.path
                      ? "text-koa-accent"
                      : "text-white hover:text-koa-accent"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-0.5 bg-koa-accent transition-all duration-300",
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-koa-dark pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-display uppercase tracking-widest text-xl text-white hover:text-koa-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}