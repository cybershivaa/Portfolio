import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

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
      className="relative w-full min-h-screen flex items-center justify-center pt-16 md:pt-0 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Content Section - Mobile: Below image, Desktop: Right */}
          <div className="order-2 md:order-1 space-y-6 md:space-y-8">
            {/* Kicker */}
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-cyan-400 mb-2">
                Hello, I'm
              </p>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2 md:mb-4">
                Shivam Kumar
              </h1>

              {/* Role/Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6">
                Full Stack Developer & Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
              I design and build scalable web applications using React, Node.js, and MongoDB. 
              Focused on performance, clean architecture, and seamless user experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <a
                href="#work"
                data-cursor="disable"
                className="group relative px-6 sm:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left"
              >
                <span>🚀 View Projects</span>
                <FiArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download
                data-cursor="disable"
                className="px-6 sm:px-8 py-3 md:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 text-center"
              >
                📄 Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image Section - Mobile: Above content, Desktop: Left */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-2xl opacity-75" />
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-colors duration-300 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/images/profile.jpg"
                  alt="Shivam Kumar - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Ring (shifted slightly left) */}
              <div className="absolute inset-0 transform -translate-x-4 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20 animate-pulse" />
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
