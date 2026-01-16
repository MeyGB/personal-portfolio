import {
  ArrowBigUp,
  ArrowRight,
  ArrowUp,
  ArrowUp01,
  ArrowUp01Icon,
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Money Tracking",
    description: "A mobile app to track expenses and manage finances.",
    tag: ["React Native", "Expo", "NodeJS"],
    image: "./projects/01.png",
    link: "",
    github: "https://github.com/MeyGB",
  },
  //   {
  //     title: "Budget Manager",
  //     description: "Track your monthly spending easily with charts.",
  //     tag: ["React", "NodeJS", "TailwindCSS"],
  //     image: "./projects/02.png",
  //     link: "#",
  //     github: "#",
  //   },
  //   {
  //     title: "Portfolio Website",
  //     description: "A personal portfolio site to showcase projects and skills.",
  //     tag: ["Next.js", "TailwindCSS", "TypeScript"],
  //     image: "./projects/03.png",
  //     link: "#",
  //     github: "#",
  //   },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute right-0 top-1/4 h-96 w-96 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 h-96 w-96 bg-highlight/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container relative px-6 z-10 mx-auto">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-sm text-secondary-foreground font-medium tracking-wide uppercase animate-fade-in">
            Feature Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200 text-secondary-foreground">
            Projects that{" "}
            <span className="font-normal font-serif text-foreground italic">
              make an impact.
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-strong rounded-2xl overflow-hidden shadow-xl flex flex-col group animate-fade-in hover:shadow-2xl transition-shadow duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Center Overlay Links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#comingsoon..."
                    target="_self"
                    className="flex items-center justify-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/100 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/100 transition-all"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 group"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tag.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-primary/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-fade-in animate-delay-500">
          <AnimatedBorderButton>
            View All Projects <ArrowUpRight className="h-5 w-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
