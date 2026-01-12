import { Code2, Gauge, Palette, Layers } from "lucide-react";

const items = [
  {
    title: "Clean Code",
    description: "Readable, maintainable, and well-structured codebases.",
    icon: Code2,
  },
  {
    title: "Performance",
    description: "Fast, optimized interfaces with smooth interactions.",
    icon: Gauge,
  },
  {
    title: "UI / UX",
    description: "Thoughtful design focused on clarity and usability.",
    icon: Palette,
  },
  {
    title: "Scalability",
    description: "Architectures that grow seamlessly with product needs.",
    icon: Layers,
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label – Full Width */}
        <div className="mb-8 animate-fade-in">
          <span className="text-primary font-semibold tracking-wider uppercase text-xl">
            About Me
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Text */}
          <div className="space-y-8 animate-fade-in animation-delay-100">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Building Clean,{" "}
              <span className="text-primary font-serif font-normal italic">
                Scalable Digital Experiences
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m a passionate frontend & mobile developer focused on building
                modern, performant, and visually refined applications. I enjoy
                turning complex problems into simple, elegant solutions using
                Vue, React, React Native, and modern UI systems.
              </p>

              <p>
                When I’m not coding, I explore new technologies, improve UI
                interactions, and design experiences that feel smooth,
                intuitive, and purposeful.
              </p>
            </div>

            {/* Quote */}
            <div className="glass p-6 rounded-2xl glow-border">
              <p className="text-lg font-medium italic text-foreground">
                “My mission is to create digital experiences that feel easy to
                use, look great, and genuinely help people get things done.”
              </p>
            </div>
          </div>

          {/* Right – Values */}
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 animate-fade-in "
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-semibold tracking-wide mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
