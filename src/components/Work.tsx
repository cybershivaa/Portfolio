import { useState, useCallback } from "react";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "InspectX",
    category: "Inspection Platform",
    tools: "React.js, Node.js, MongoDB, Cloud Storage",
    image: "/images/Inspectx.png",
    link: "https://inspect-x-app.vercel.app/login",
  },
  {
    title: "Properties Professor CRM",
    category: "Real Estate CRM",
    tools: "React.js, Express.js, MongoDB, DigitalOcean",
    image: "/images/Pp.png",
    link: "https://propertiesprofessor.com",
  },
  {
    title: "Properties Professor Website",
    category: "Real Estate Website",
    tools: "React.js, Node.js, Express.js, MongoDB",
    image: "/images/ppwebsite.png",
    link: "https://propertiesprofessor.com",
  },
  {
    title: "Helpora",
    category: "Real-time Emergency Response System",
    tools: "React.js, Tailwind CSS, JavaScript",
    image: "/images/helpora.png",
    link: "https://helpora.vercel.app",
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const currentProject = projects[currentIndex];

  return (
    <section id="work" className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Mobile: Card Layout */}
          <div className="md:hidden space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border transition-all duration-300 ${
                  index === currentIndex
                    ? "border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-transparent shadow-lg shadow-cyan-500/20"
                    : "border-gray-700/50 bg-slate-800/20 opacity-50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium mb-2">{project.category}</p>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400/30">0{index + 1}</span>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 mb-2">Tools & Features</p>
                  <p className="text-sm text-gray-300">{project.tools}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded text-sm font-semibold hover:bg-cyan-400 transition-colors"
                >
                  Visit Project
                  <MdArrowOutward className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Desktop: Carousel Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div className="space-y-6 lg:order-1">
                {/* Project Number */}
                <div>
                  <p className="text-6xl lg:text-7xl font-bold text-cyan-400/20 leading-none">
                    0{currentIndex + 1}
                  </p>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                    {currentProject.title}
                  </h3>
                  <p className="text-lg text-cyan-400 font-semibold mb-4">
                    {currentProject.category}
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">Tools & Features</p>
                  <p className="text-gray-300 leading-relaxed">
                    {currentProject.tools}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <span>View Project</span>
                  <MdArrowOutward className="w-5 h-5" />
                </a>
              </div>

              {/* Project Image */}
              <div className="lg:order-2">
                <div className="relative rounded-lg overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-colors shadow-2xl shadow-cyan-500/10">
                  <WorkImage
                    image={currentProject.image}
                    alt={currentProject.title}
                    link={currentProject.link}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 md:mt-16">
            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
                className="p-3 rounded-lg border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110"
              >
                <MdArrowBack className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
                className="p-3 rounded-lg border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110"
              >
                <MdArrowForward className="w-6 h-6" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 md:gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 bg-cyan-400"
                      : "w-3 bg-gray-600 hover:bg-gray-400"
                  }`}
                  style={{ height: "6px" }}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-sm font-semibold text-gray-400">
              <span className="text-cyan-400">{String(currentIndex + 1).padStart(2, '0')}</span>
              {' / '}
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
