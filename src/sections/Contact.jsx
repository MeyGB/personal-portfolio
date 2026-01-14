import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  {
    label: "Location",
    value: "Siem Reap / Cambodia",
    href: "#",
    icon: MapPin,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
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

        {/* Grid: Form + Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animate-delay-300">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your name ..."
                  className="w-full border border-border rounded-xl px-4 py-3 bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Your email ..."
                  className="w-full border border-border rounded-xl px-4 py-3 bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  id="message"
                  required
                  placeholder="Your message ..."
                  className="w-full border border-border rounded-xl px-4 py-3 bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                className="w-full mt-4 flex items-center justify-center gap-2"
                size="lg"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Send className="w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6 animate-fade-in animate-delay-400">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.label === "Telegram" ? "_blank" : undefined}
                rel={
                  item.label === "Telegram" ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-4 group rounded-xl p-4 hover:bg-primary/5 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-medium group-hover:text-primary transition">
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
