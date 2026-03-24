import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {/* Aesthetic Floating Background Elements */}
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              <span className="name-primary">SHIVAM</span>
              <br />
              <span className="name-secondary">KUMAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Full Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
            <p className="landing-custom-subtitle">
              Full Stack Developer | React | Node.js | MongoDB <br />
              <span style={{ color: "var(--accentColor)", fontWeight: "600" }}>
                🏆 Smart India Hackathon 2025 Finalist
              </span>
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
