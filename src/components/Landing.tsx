import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Landing = () => {
  const landingRef = useRef<HTMLDivElement>(null);

  const updateGlow = (clientX: number, clientY: number) => {
    const landing = landingRef.current;
    if (!landing) {
      return;
    }

    const rect = landing.getBoundingClientRect();
    landing.style.setProperty("--glow-x", `${clientX - rect.left}px`);
    landing.style.setProperty("--glow-y", `${clientY - rect.top}px`);
    landing.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    updateGlow(event.clientX, event.clientY);
  };

  const handleMouseLeave = () => {
    const landing = landingRef.current;
    if (!landing) {
      return;
    }

    landing.style.setProperty("--glow-opacity", "0");
  };

  return (
    <section
      id="landingDiv"
      ref={landingRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex items-start justify-center pt-24 sm:pt-28 md:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900"
      style={{
        "--glow-x": "50%",
        "--glow-y": "50%",
        "--glow-opacity": "0.75",
      } as React.CSSProperties}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-8 rounded-3xl bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      </div>

      {/* Animated Background Blur */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          
          {/* Content Section - Mobile: Below image, Desktop: Right */}
          <div className="order-2 md:order-1 space-y-5 md:space-y-6">
            {/* Kicker */}
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-cyan-400 mb-2">
                Hello, I'm
              </p>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2 md:mb-3">
                Shivam Kumar
              </h1>

              {/* Role/Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 md:mb-4">
                Full Stack Developer & Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
              Passionate Full Stack Developer and Computer Science student with hands-on experience in building modern, scalable, and user-focused web applications. Currently working as a Full Stack Developer Intern at Properties Professor, where I contribute to CRM systems, cloud-based platforms, and automation solutions using React, Node.js, MongoDB, and modern deployment technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-3">
              <a
                href="#work"
                data-cursor="disable"
                className="group relative px-6 sm:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left"
              >
                <span>Projects</span>
                <FiArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download
                data-cursor="disable"
                className="px-6 sm:px-8 py-3 md:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 text-center"
              >
              Resume
              </a>
            </div>
          </div>

          {/* Profile Card Section - Mobile: Above content, Desktop: Left */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="w-full max-w-[350px] rounded-[22px] border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-3 shadow-[0_14px_34px_rgba(0,0,0,0.28)]">
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src="/images/profile.jpg"
                  alt="Shivam Kumar"
                  className="h-[245px] w-full object-cover object-top sm:h-[275px]"
                />
              </div>

              <div className="mt-2.5 space-y-2">
                <div className="rounded-2xl bg-white/5 px-3 py-2 text-center border border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 mb-1">Education</p>
                  <p className="text-sm sm:text-base font-medium text-white">B.Tech CSE</p>
                  <p className="text-sm sm:text-base text-gray-300">Amity University</p>
                </div>

                <div className="rounded-2xl bg-white/5 px-3 py-2 text-center border border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 mb-1">Focus</p>
                  <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
                    Software Development, Full Stack Developer
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 px-3 py-2 text-center border border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 mb-1">Based In</p>
                  <p className="text-sm sm:text-base font-medium text-white">Noida, India</p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-3">
                <a
                  href="mailto:shivamkumar07514@gmail.com"
                  aria-label="Email Shivam Kumar"
                  data-cursor="disable"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:scale-105"
                >
                  <FaEnvelope className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/cybershivaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  data-cursor="disable"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:scale-105"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-kumar-6286982b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  data-cursor="disable"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:scale-105"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Landing;
