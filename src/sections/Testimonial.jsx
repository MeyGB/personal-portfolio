import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    role: "Project Manager",
    quote:
      "Working with Mey was a great experience. He consistently delivered clean, well-structured code and communicated clearly throughout the project.",
    author: "Ouk Boromey",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
  },
  {
    role: "Frontend Developer",
    quote:
      "He has a strong eye for UI details and performance. Our collaboration was smooth, and the final result exceeded expectations.",
    author: "Sok Dara",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    role: "Team Lead",
    quote:
      "A strong problem solver with a calm mindset. Mey handles challenges thoughtfully and consistently improves the quality of the product.",
    author: "Chan Vannak",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
];

export const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  const item = testimonials[index];

  return (
    <section id="testimonial" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-fade-in text-sm font-medium tracking-wider uppercase text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold animate-fade-in animate-delay-100">
            What People{" "}
            <span className="font-serif italic font-normal text-primary">
              Say
            </span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-xl mx-auto glass glow-border rounded-2xl p-8 text-center animate-fade-in animation-delay-200">
          <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Quote className="w-6 h-6 text-primary-foreground" />
          </div>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
            "{testimonials[index].quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src={item.avatar}
              alt={item.author}
              className="w-14 h-14 rounded-full object-cover border border-border"
            />
            <div className="text-left">
              <p className="font-semibold">{item.author}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full duration-500 transition-all ${
                    i === index
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
