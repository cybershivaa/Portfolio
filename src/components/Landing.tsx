import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./styles/Landing.css";

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
    <div
      className="landing-section"
      id="landingDiv"
      ref={landingRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="landing-container">
        <div className="landing-bg-grid" aria-hidden="true" />
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="floating-shape shape-3" aria-hidden="true" />

        <div className="landing-grid">
          <div className="landing-intro">
            <p className="landing-kicker">Hello, I'm</p>
            <h1>Shivam Kumar</h1>
            <h2 className="role">Full Stack Developer / Software Engineer</h2>
            <p className="landing-description">
              I design and build scalable web applications using React, Node.js, and MongoDB.
              Focused on performance, clean architecture, and seamless user experience.
            </p>
            <div className="landing-actions">
              <a className="landing-button landing-button-primary" href="#work" data-cursor="disable">
                  <span>🚀 View Project</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a className="landing-button landing-button-secondary" href="/resume.pdf" download data-cursor="disable">
                <span>📄 Download Resume</span>
              </a>
            </div>
          </div>

          <div className="landing-photo">
            <img src="/images/profile.jpg" alt="Shivam Kumar" className="profile-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
