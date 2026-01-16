import { Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/MeyGB",
    icon: Github,
  },
  {
    label: "Telegram",
    href: "https://t.me/ouk_boromey",
    icon: Send,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface text-muted-foreground py-3 border-t border-primary/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-center md:text-center flex flex-col items-center md:items-center"
        >
          <img
            src="/logo/logo_teals.png"
            alt="Logo"
            className="w-16 h-auto mb-2"
          />
          <p className="text-sm text-muted-foreground">Web App Developer</p>
        </a>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={item.label}
            >
              <item.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right text-muted-foreground">
          © {currentYear} Ouk Boromey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
