import { Mail, Phone, Send } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const contactInfo = [
  {
    label: "Email",
    value: "oukboromey008@gmail.com",
    href: "mailto:oukboromey008@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone Number",
    value: "+855 16 709 693",
    href: "tel:+85516709693",
    icon: Phone,
  },
  {
    label: "Telegram",
    value: "@ouk_boromey",
    href: "https://t.me/ouk_boromey",
    icon: Send,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col gap-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Contact
          </span>
          <h2 className="mt-4 mb-4 text-4xl md:text-5xl font-bold animate-fade-in animate-delay-100">
            Let’s{" "}
            <span className="font-serif italic font-normal text-primary">
              Connect
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            Feel free to reach out for collaboration, opportunities, or just a
            friendly chat.
          </p>
        </div>
      </div>
    </section>
  );
};
