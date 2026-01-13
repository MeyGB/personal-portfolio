import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    period: "July 2024 – Present",
    role: "Web App Developer",
    company: "ESTC",
    description:
      "Developing and maintaining modern web applications with a focus on performance, scalability, and clean UI architecture.",
    technology: [
      "React & RN",
      "Vue",
      "TailwindCSS",
      "SQL",
      "Postgres",
      "Linux",
      "Supabase",
      "Appwrite",
      "Node.js",
      "֎ Chat GPT",
    ],
    current: true,
  },
  {
    period: "Jan 2024 – June 2024",
    role: "Code Technical & IT Support",
    company: "ESTC",
    description:
      "Provided technical support, assisted in debugging issues, and helped maintain internal systems and codebases.",
    technology: ["JavaScript", "Vue", "System Support", "Networking"],
    current: false,
  },
];

const techIcons = {
  "React & RN": "devicon-react-original colored",
  Vue: "devicon-vuejs-plain colored",
  TailwindCSS: "devicon-tailwindcss-plain colored",
  SQL: "devicon-azuresqldatabase-plain colored",
  Postgres: "devicon-postgresql-plain colored",
  Supabase: "devicon-supabase-plain colored",
  Appwrite: "devicon-appwrite-original colored",
  Linux: "devicon-linux-plain",
  "Node.js": "devicon-nodejs-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  Networking: "devicon-networkx-plain colored",
  "System Support": "devicon-linux-plain",
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100">
            Where I’ve{" "}
            <span className="font-serif italic font-normal text-primary">
              Worked
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            Over the past few years, I’ve worked across different roles and
            teams, gaining hands-on experience in building, supporting, and
            improving modern web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-8 md:pl-0 ${
                      isEven
                        ? "md:col-start-1 md:pr-16 text-left"
                        : "md:col-start-2 md:pl-16 text-left"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                    >
                      <span className="flex items-center gap-2 text-sm text-secondary-foreground">
                        <Calendar size={14} />
                        {exp.period}
                      </span>

                      <h3 className="flex items-center gap-2 text-xl font-semibold mt-2">
                        <Briefcase size={16} />
                        {exp.role}
                      </h3>

                      <p className="font-medium text-secondary-foreground">
                        {exp.company}
                      </p>

                      <p className="mt-2 text-muted-foreground">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {exp.technology.map((tech) => (
                          <span
                            key={tech}
                            className="flex items-center gap-2 px-3 py-1 text-sm rounded-full border border-primary/30 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                          >
                            <i className={`${techIcons[tech]} text-lg`}></i>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
