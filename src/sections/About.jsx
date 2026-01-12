export const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-12">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        {/* Left – Text */}
        <div className="animate-fade-in">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            About Me
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            Crafting clean, scalable
            <br />
            digital experiences
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            I’m a passionate frontend & mobile developer focused on building
            modern, performant, and visually refined applications. I enjoy
            turning complex problems into simple, elegant solutions using React,
            React Native, and modern UI systems.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            When I’m not coding, I explore new technologies, improve UI
            interactions, and design experiences that feel smooth, intuitive,
            and purposeful.
          </p>
        </div>

        {/* Right – Card */}
        <div className="glass-strong rounded-2xl p-8 animate-fade-in animation-delay-200">
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Experience</span>
              <span className="font-medium">2+ Years</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Specialty</span>
              <span className="font-medium">Frontend & Mobile</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Stack</span>
              <span className="font-medium">React, RN, Tailwind</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Location</span>
              <span className="font-medium">Remote / Cambodia</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
