import {
  ArrowRight,
  Download,
  Github,
  Facebook,
  ChevronDown,
} from "lucide-react";
import { Button } from "../components/Button";
/* eslint-disable react-hooks/purity */
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
export const Hero = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Vuetify",
    "Primevue",
    "React Native",
    "React",
    "Python",
    "PHP",
    "NodeJS",
    "SQL",
    "Mysql",
    "Postgres",
    "Supabase",
    "Appwrite",
  ];

  // Devicon class names for each skill
  const skillIcons = {
    JavaScript: "devicon-javascript-plain",
    TypeScript: "devicon-typescript-plain",
    Python: "devicon-python-plain",
    PHP: "devicon-php-plain",
    SQL: "devicon-azuresqldatabase-plain colored", // using MySQL as a general SQL icon
    Mysql: "devicon-mysql-plain",
    Postgres: "devicon-postgresql-plain colored",
    React: "devicon-react-original",
    Supabase: "devicon-supabase-plain colored",
    Appwrite: "devicon-appwrite-original colored",
    "Vue.js": "devicon-vuejs-plain",
    Vuetify: "devicon-vuetify-plain colored",
    NodeJS: "devicon-npm-original-wordmark colored",
    Primevue: "devicon-primeng-plain",
    "React Native": "devicon-react-original", // React logo for React Native
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./spaces.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dot */}
      <div className="absolute overflow-hidden inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#20B2A6] opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                6 + Math.random() * 6
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex px-4 py-2 gap-3 items-center rounded-full glass text-sm text-primary">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                Mobile & Web · Developer
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white animate-fade-in animation-delay-100">
              Hi, I’m Mey!
            </h1>

            <p className="text-lg text-white/80 animate-fade-in animation-delay-200">
              Web and mobile app developer skilled in React, React Native, and
              Vue, creating responsive and user-friendly interfaces.
            </p>
          </div>

          {/* CTA */}

          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
            <a href="#contact">
              <Button size="md">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="/Boromey_CV.pdf" download="Boromey_CV.pdf">
              <div className="text-center animate-fade-in animate-delay-400">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </div>
            </a>
          </div>
          {/* Social Linked */}
          <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
            <span>Follow Me :</span>
            {[
              { icon: Github, href: "https://github.com/MeyGB", blank: true },
              { icon: Facebook, href: "#", blank: false },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={!social.blank ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className=" rounded-ful text-muted-foreground hover:text-primary
        hover:bg-primary/10
        transition-all duration-400
      "
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Right Column (optional image / illustration) */}
          <div className="relative animate-fade-in animate-delay-500">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/mey.png"
                  alt="Ouk Boromey"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Floating Bage */}

                <div className="absolute -bottom-4 -right-4 glass rounded-full px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute -top-4 -left-4 animate-float glass rounded-md px-2 py-3 animate-delay-600">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill Selection */}
        <div className="mt-20 animate-fade-in animate-delay-700">
          <p className="text-sm text-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max whitespace-nowrap animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 flex-shrink-0 px-8 py-4"
                >
                  <i
                    className={`${skillIcons[skill]} colored text-2xl`}
                    title={skill}
                  />
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider text-foreground">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
