import { Button } from "@/components/Button";

const navLink = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
];
export const Navbar = () => {
  return (
    <header className="bg-red-400 fixed py-5 left-0 top-0 right-0">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          BN.
          {/* <span>.</span> */}
        </a>
        <div className="flex items-center gap-1">
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
        <Button>Contentssss</Button>
      </nav>
    </header>
  );
};
