const About = () => {
  // skills list removed because Core Expertise section was removed

  return (
    <section id="about" className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.18fr_0.82fr] gap-8 lg:gap-10 items-start">
          {/* Main Description */}
          <div className="space-y-5 md:pr-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_16px_34px_rgba(0,0,0,0.25)]">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I’m a Computer Science undergraduate and Full Stack Developer with a strong passion for building scalable web applications, cloud-based platforms, and modern digital experiences. I enjoy working on innovative projects that combine clean UI design, efficient backend systems, and real-world problem solving through technology.
              </p>
              <p className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed">
                My expertise includes React.js, Node.js, Express.js, MongoDB, and cloud deployment technologies. I enjoy designing clean user interfaces, developing efficient backend architectures, and creating seamless user experiences across web platforms.
              </p>
              <p className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed">
                Alongside full stack development, I also explore IoT systems, smart automation, and system architecture. As a Smart India Hackathon 2025 Grand Finalist, I enjoy solving practical problems through technology and building impactful digital solutions that combine performance, scalability, and usability.
              </p>
            </div>

            {/* Education moved to the info box below */}
          </div>

            {/* Light info box with Education (left) and Highlights (right) - compacted */}
          <div className="w-full max-w-4xl mx-auto -mt-6 md:-mt-0 rounded-[20px] border border-white/10 bg-white/5/5 p-4 sm:p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-sm font-semibold text-white">B.Tech in Computer Science</p>
                    <p className="text-sm text-gray-300">Amity University, Noida</p>
                    <p className="text-xs text-gray-400 mt-1">2023 - 2027</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-sm font-semibold text-white">Senior Secondary Education (Class XII)</p>
                    <p className="text-sm text-gray-300">A.N.S Collage, Barh (Patna)</p>
                    <p className="text-sm text-gray-300">Science Stream</p>
                    <p className="text-xs text-gray-400 mt-1">Percentage: 71.2%</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-sm font-semibold text-white">Secondary Education (Class X)</p>
                    <p className="text-sm text-gray-300">Notre Dame Academy, Barh (Patna)</p>
                    <p className="text-xs text-gray-400 mt-1">Percentage: 83.5%</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#work"
                    className="block p-3 rounded-lg bg-gradient-to-br from-[#081c33] to-[#050816] border border-cyan-500/25 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">6+</div>
                    <p className="text-gray-300 text-sm">Projects Completed</p>
                  </a>
                  <a
                    href="#techstack"
                    className="block p-3 rounded-lg bg-gradient-to-br from-[#14112f] to-[#050816] border border-fuchsia-500/25 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-fuchsia-400 mb-1">5+</div>
                    <p className="text-gray-300 text-sm">Tech Stacks</p>
                  </a>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#0d1730] to-[#050816] border border-blue-500/20">
                    <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">3+</div>
                    <p className="text-gray-300 text-sm">Years Learning</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#1a1028] to-[#050816] border border-pink-500/20">
                    <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">∞</div>
                    <p className="text-gray-300 text-sm">Always Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
