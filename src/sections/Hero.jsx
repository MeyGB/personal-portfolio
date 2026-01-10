export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dot */}
      <div className="absolute overflow-hidden inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
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
                Mobile App Developer · React Native
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white animate-fade-in animation-delay-100">
              Hi, I’m Mey
            </h1>

            <p className="text-lg text-white/80 animate-fade-in animation-delay-200">
              Web and mobile app developer skilled in React, React Native, and
              Vue, creating responsive and user-friendly interfaces.
            </p>
          </div>

          {/* Right Column (optional image / illustration) */}
        </div>
      </div>
    </section>
  );
};
