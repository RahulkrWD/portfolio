import React from "react";
import styles from "./styles/Skills.module.css";

const SKILLS = [
  { name: "HTML", icon: "fa-brands fa-html5", color: "#E34F26" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952B3" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
  { name: "React.js", icon: "fa-brands fa-react", color: "#61DAFB" },
  { name: "Firebase", icon: "fa-solid fa-fire", color: "#FFCA28" },
  { name: "MongoDB", icon: "fa-brands fa-envira", color: "#47A248" },
  { name: "Express.js", icon: "fa-solid fa-server", color: "#000000" },
  { name: "REST APIs", icon: "fa-solid fa-cloud", color: "#3178C6" },
  { name: "Git/GitHub", icon: "fa-brands fa-github", color: "#181717" },
  { name: "Material-UI", icon: "fa-brands fa-css3", color: "#0081CB" },
  { name: "Redux Toolkit", icon: "fa-solid fa-cubes", color: "#764ABC" },
  { name: "Core Java", icon: "fa-brands fa-java", color: "#007396" },
  { name: "SQL/MySQL", icon: "fa-solid fa-database", color: "#4479A1" },
];

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.skillsHeading}>My Skills</h2>
        <div className={styles.skillsContainer}>
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className={styles.skillCard}
              style={{ "--skill-color": skill.color }}
            >
              <div className={styles.skillIcon}>
                <i className={`${skill.icon} ${styles.fontAwesomeIcon}`}></i>
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
