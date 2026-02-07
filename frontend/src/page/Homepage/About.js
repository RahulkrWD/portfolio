import React from "react";
import styles from "./styles/About.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode, FaLayerGroup, FaRocket, FaCode, FaDatabase, FaServer, FaGitAlt, FaTools, FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import SectionHeading from "../../components/SectionHeading";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="A quick snapshot of who I am and what I build"
        />
        <Row className="align-items-center">
          <Col lg={6} className={styles.imageContainer} data-aos="fade-right">
            <img
              className={styles.aboutImage}
              src="/image/formal-photo.jpg"
              alt="Profile"
            />
            <div className={styles.iconBadges}>
              <FaCode title="HTML/CSS/JS" className={styles.techIcon} />
              <FaReact title="React.js" className={styles.techIcon} />
              <SiRedux title="Redux" className={styles.techIcon} />
              <FaServer title="Node.js" className={styles.techIcon} />
              <FaDatabase title="MongoDB" className={styles.techIcon} />
              <SiTailwindcss title="Tailwind" className={styles.techIcon} />
              <FaGitAlt title="Git" className={styles.techIcon} />
              <FaTools title="Dev Tools" className={styles.techIcon} />
            </div>
          </Col>

          <Col lg={6} className={styles.aboutContent} data-aos="fade-left">
            <p className={styles.aboutText}>
              <span className={styles.firstLetter}>P</span>assionate Full Stack
              Developer with hands-on experience building responsive, production-ready
              web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js),
              and 3 months of experience working on React Native mobile apps. I focus on
              clean UI, scalable APIs, and maintainable code—delivering smooth user experiences
              across web and mobile. I enjoy solving real-world problems, collaborating with teams,
              and improving through modern best practices and tools.
            </p>

            <div className={styles.aboutHighlights}>
              <div className={styles.highlightItem} data-aos="zoom-in" data-aos-delay="100">
                <FaLaptopCode className={styles.highlightIcon} />
                <span>Full Stack Proficiency</span>
              </div>
              <div className={styles.highlightItem} data-aos="zoom-in" data-aos-delay="200">
                <FaLayerGroup className={styles.highlightIcon} />
                <span>Modern Architecture</span>
              </div>
              <div className={styles.highlightItem} data-aos="zoom-in" data-aos-delay="300">
                <FaRocket className={styles.highlightIcon} />
                <span>Performance Optimization</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
