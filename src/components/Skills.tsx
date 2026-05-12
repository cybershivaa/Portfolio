import { useRef, useEffect } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container section-container">
        <div
          className="skills-header"
          data-scroll-animate="fade-up"
          style={{ "--anim-duration": "700ms", "--anim-delay": "0ms" } as React.CSSProperties}
        >
          <h2 className="skills-title">Skills</h2>
          <p className="skills-subtitle">
            A growing toolkit shaped through projects, open-source contributions,
            and hands-on experimentation.
          </p>
        </div>

        <div className="skills-pills">
          {skills.map((skill, idx) => (
            <span
              key={skill}
              className="skill-pill"
              data-anim
              style={{ "--anim-delay": `${idx * 70}ms` } as React.CSSProperties}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
