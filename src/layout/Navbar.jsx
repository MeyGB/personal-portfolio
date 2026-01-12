import { Button } from "@/components/Button";
import { Facebook, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLink = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 ${
        isScroll ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          BN.
        </a>
        {/* Desktop Screen */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass flex rounded-full gap-3 px-2">
            {navLink.map((link, i) => (
              <a
                href={link.href}
                key={i}
                className="px-2 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
        {/* Mobile Scrren Button Menu */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer animate-fade-in"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 animate-fade-in">
            {navLink.map((link, i) => (
              <a
                href={link.href}
                key={i}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-2 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
