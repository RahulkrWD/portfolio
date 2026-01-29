import React from "react";
import styles from "./styles/Skills.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { SiNestjs, SiReact, SiTypescript } from "react-icons/si";
import SectionHeading from "../../components/SectionHeading";

const SKILLS = [
  { name: "HTML", icon: "fa-brands fa-html5", color: "#E34F26" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952B3" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
  { name: "React.js", icon: "fa-brands fa-react", color: "#61DAFB" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
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
      <Container>
        <SectionHeading
          title="My Skills"
          subtitle="Technologies I use to build web and mobile products"
        />
        <Row className={`g-4 justify-content-center ${styles.skillsContainer}`}>
          {SKILLS.map((skill, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index} className="d-flex justify-content-center">
              <div
                className={styles.skillCard}
                style={{ "--skill-color": skill.color }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className={styles.skillIcon}>
                  {skill.Icon ? (
                    <skill.Icon className={styles.reactIcon} />
                  ) : (
                    <i className={`${skill.icon} ${styles.fontAwesomeIcon}`}></i>
                  )}
                </div>
                <div className={styles.skillContent}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.skillLevel}>
                    <div className={styles.skillLevelBar} style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
