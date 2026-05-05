const About = () => {
  const skills = [
    "React",
    "Node.js",
    "REST APIs",
    "MongoDB",
    "JavaScript",
    "DSA",
    "Express.js",
    "TypeScript",
  ];

  return (
    <section id="about" className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Computer Science Engineering student with hands-on experience in full-stack web development and database-driven applications.
            </p>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Strong foundation in DBMS, operating systems, and UI-focused design. Passionate about building scalable, user-centric applications with clean architecture and optimal performance.
            </p>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">6+</div>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-purple-400/10 to-transparent border border-purple-400/20 hover:border-purple-400/50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">5+</div>
              <p className="text-gray-400 text-sm">Tech Stacks</p>
            </div>
            <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-blue-400/10 to-transparent border border-blue-400/20 hover:border-blue-400/50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">3+</div>
              <p className="text-gray-400 text-sm">Years Learning</p>
            </div>
            <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-pink-400/10 to-transparent border border-pink-400/20 hover:border-pink-400/50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">∞</div>
              <p className="text-gray-400 text-sm">Always Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
