const Career = () => {
  const experiences = [
    {
      role: "Client Projects",
      company: "Freelance / Clients",
      year: "2025",
      description: "Worked with multiple clients to develop full-stack web applications using React.js, Node.js, and MongoDB. Built responsive dashboards, implemented REST APIs, handled authentication, and deployed projects on Vercel and cloud servers. Focused on performance optimization and scalable architecture.",
      links: [],
    },
    {
      role: "InspectX",
      company: "InspectX",
      year: "2025",
      description: "Developed the InspectX inspection and reporting platform with React.js frontend and Node.js backend. Implemented dynamic inspection forms, role-based access control, media uploads, and real-time data management. Integrated MongoDB database and cloud storage for handling inspection reports efficiently.",
      links: [{ label: "InspectX App", url: "https://inspect-x-app.vercel.app/login" }],
    },
    {
      role: "Helpora",
      company: "Helpora",
      year: "2025",
      description: "Developed a real-time emergency response platform with SOS alert dashboard and helpline directory. Built responsive React-based UI with quick actions, sidebar navigation, and emergency reporting modules.",
      links: [{ label: "Helpora App", url: "https://helpora.vercel.app" }],
    },
    {
      role: "Properties Professor CRM",
      company: "Properties Professor Real Estate Company",
      year: "2026",
      description: "Currently developing a complete real estate CRM system including lead management, property listings, broker dashboards, and automation tools. Built using React, Node.js, MongoDB, and DigitalOcean Spaces for media storage. Implemented secure authentication, API integrations, and production deployment.",
      links: [
        { label: "Dashboard", url: "https://dashboard.propertiesprofessor.com" },
        { label: "Website", url: "https://propertiesprofessor.com" },
      ],
    },
    {
      role: "Smart Automation & IoT",
      company: "Smart Automation & IoT Solutions",
      year: "2026",
      description: "Worked on smart automation and IoT-based systems including sensor integration, microcontrollers (ESP32/Pico), and real-time data monitoring dashboards. Built interactive systems for educational and real-world applications, combining hardware with modern web technologies for seamless control and visualization.",
      links: [],
    },
  ];

  return (
    <section id="career" className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My Career <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">& Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop Only */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500" />

          {/* Experience Cards */}
          <div className="space-y-5 md:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-32">
                {/* Timeline Dot - Desktop Only */}
                <div className="hidden md:block absolute left-0 top-6 w-16">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-slate-950" />
                </div>

                {/* Card */}
                <div className="p-5 md:p-6 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 bg-gradient-to-br from-slate-800/30 to-transparent hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-gray-400 mt-2 md:mt-0">
                      {exp.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Links */}
                  {exp.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {exp.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="disable"
                          className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/50 rounded text-sm font-medium transition-all duration-300"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
