import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h3 className="about-title">About Me</h3>
            <div className="about-underline"></div>
          </div>
          
          <div className="about-text-block">
            <p className="about-description">
              Computer Science Engineering student with hands-on experience in full-stack web development and database-driven applications.
            </p>
            
            <div className="about-skills">
              <h4 className="about-subtitle">Core Expertise</h4>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">DSA</span>
              </div>
            </div>
            
            <p className="about-details">
              Strong foundation in DBMS, operating systems, and UI-focused design. Passionate about building scalable, user-centric applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
