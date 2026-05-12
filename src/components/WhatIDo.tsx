import { useRef, useEffect, useState } from "react";

const WhatIDo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">("frontend");

  const services = [
    {
      id: "frontend",
      title: "FRONTEND",
      subtitle: "Building Interactive UIs",
      description:
        "Crafting performant, responsive interfaces with modern frameworks. From SPAs to micro-frontends, I deliver pixel-perfect experiences.",
      skills: ["React", "HTML", "CSS", "Tailwind", "JavaScript", "TypeScript"],
    },
    {
      id: "backend",
      title: "BACKEND",
      subtitle: "Scalable Server Architecture",
      description:
        "Designing robust APIs and microservices. From CMS platforms to complex business logic, I build backends that scale.",
      skillGroups: [
        {
          label: "Runtime & Framework",
          items: ["Node.js", "Express", "REST API", "Authentication"],
        },
        {
          label: "Database",
          items: ["MongoDB", "MySQL"],
        },
        {
          label: "Tools",
          items: ["Git", "GitHub", "VS Code"],
        },
      ],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatedEls = Array.from(
      section.querySelectorAll<HTMLElement>("[data-scroll-animate], [data-anim]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className="mb-8 md:mb-10 text-center"
          data-scroll-animate="fade-up"
          style={{ "--anim-duration": "700ms", "--anim-delay": "0ms" } as React.CSSProperties}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What I
            </span>{" "}
            <span className="text-white">Do</span>
          </h2>
        </div>

        {/* Mobile: Tab Navigation */}
        <div
          className="md:hidden flex gap-4 mb-6"
          data-scroll-animate="fade-up"
          style={{ "--anim-duration": "600ms", "--anim-delay": "100ms" } as React.CSSProperties}
        >
          <button
            onClick={() => setActiveTab("frontend")}
            className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "frontend"
                ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/50"
                : "bg-slate-800 text-gray-300 border border-gray-700 hover:border-gray-600"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "backend"
                ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/50"
                : "bg-slate-800 text-gray-300 border border-gray-700 hover:border-gray-600"
            }`}
          >
            Backend
          </button>
        </div>

        {/* Mobile: Single Card View */}
        <div className="md:hidden">
          {activeTab === "frontend" && (
            <div
              className="p-6 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-slate-800/50 to-transparent hover:border-cyan-400/50 transition-all duration-300"
              data-scroll-animate="zoom-in"
              style={{ "--anim-duration": "600ms", "--anim-delay": "150ms" } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Frontend</h3>
              <h4 className="text-cyan-400 font-semibold mb-4">Building Interactive UIs</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting performant, responsive interfaces with modern frameworks. From SPAs to
                micro-frontends, I deliver pixel-perfect experiences.
              </p>
              <div>
                <p className="text-xs font-semibold text-gray-400 mb-3">Skillset &amp; Tools</p>
                <div className="flex flex-wrap gap-2">
                  {services[0]?.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "backend" && (
            <div
              className="p-6 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-slate-800/50 to-transparent hover:border-cyan-400/50 transition-all duration-300"
              data-scroll-animate="zoom-in"
              style={{ "--anim-duration": "600ms", "--anim-delay": "150ms" } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Backend</h3>
              <h4 className="text-cyan-400 font-semibold mb-4">Scalable Server Architecture</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Designing robust APIs and microservices. From CMS platforms to complex business
                logic, I build backends that scale.
              </p>
              <div className="space-y-4">
                {services[1].skillGroups?.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold text-gray-400 mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Side by Side Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="p-7 lg:p-8 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 bg-gradient-to-br from-slate-800/30 to-transparent hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              data-scroll-animate={idx === 0 ? "fade-right" : "fade-left"}
              style={{ "--anim-duration": "750ms", "--anim-delay": `${idx * 120}ms` } as React.CSSProperties}
            >
              {/* Header */}
              <div className="mb-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <h4 className="text-lg text-cyan-400 font-semibold">{service.subtitle}</h4>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Skills - Frontend */}
              {service.id === "frontend" && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                    Skillset &amp; Tools
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.skills?.map((skill, si) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                        data-anim
                        style={{ "--anim-delay": `${si * 60}ms` } as React.CSSProperties}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills - Backend */}
              {service.id === "backend" && (
                <div className="space-y-5">
                  {service.skillGroups?.map((group, gi) => (
                    <div key={group.label}>
                      <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-widest">
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {group.items.map((item, ii) => (
                          <span
                            key={item}
                            className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                            data-anim
                            style={{ "--anim-delay": `${(gi * 3 + ii) * 60}ms` } as React.CSSProperties}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
