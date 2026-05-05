import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance / Clients</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked with multiple clients to develop full-stack web applications
              using React.js, Node.js, and MongoDB. Built responsive dashboards,
              implemented REST APIs, handled authentication, and deployed projects
              on Vercel and cloud servers. Focused on performance optimization and scalable architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>InspectX</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed the InspectX inspection and reporting platform with React.js
              frontend and Node.js backend. Implemented dynamic inspection forms,
              role-based access control, media uploads, and real-time data
              management. Integrated MongoDB database and cloud storage for handling
              inspection reports efficiently.<br /><br />
              Link:{" "}
              <a
                href="https://inspect-x-app.vercel.app/login"
                target="_blank"
                style={{ color: "var(--accentColor)" }}
                data-cursor="disable"
              >
                InspectX App
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Helpora</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a real-time emergency response platform with SOS alert dashboard and helpline directory. Built responsive React-based UI with quick actions, sidebar navigation, and emergency reporting modules.<br /><br />
              Link:{" "}
              <a
                href="https://helpora.vercel.app"
                target="_blank"
                style={{ color: "var(--accentColor)" }}
                data-cursor="disable"
              >
                Helpora App
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Properties Professor Real Estate Company</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Currently developing a complete real estate CRM system including lead
              management, property listings, broker dashboards, and automation tools.
              Built using React, Node.js, MongoDB, and DigitalOcean Spaces for media
              storage. Implemented secure authentication, API integrations, and
              production deployment.<br /><br />
              Links:{" "}
              <a
                href="https://dashboard.propertiesprofessor.com"
                target="_blank"
                style={{ color: "var(--accentColor)" }}
                data-cursor="disable"
              >
                Dashboard
              </a>{" "}
              |{" "}
              <a
                href="https://propertiesprofessor.com"
                target="_blank"
                style={{ color: "var(--accentColor)" }}
                data-cursor="disable"
              >
                Website
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Smart Automation & IoT Solutions</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked on smart automation and IoT-based systems including sensor
              integration, microcontrollers (ESP32/Pico), and real-time data
              monitoring dashboards. Built interactive systems for educational and
              real-world applications, combining hardware with modern web
              technologies for seamless control and visualization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
