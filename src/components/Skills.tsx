import "../components/styles/Skills.css";

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container section-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-subtitle">
            A growing toolkit shaped through projects, open-source contributions,
            and hands-on experimentation.
          </p>
        </div>

        <div className="skills-pills">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
