import React from "react";
import styles from "./styles/About.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode, FaLayerGroup, FaRocket, FaCode, FaDatabase, FaServer, FaGitAlt, FaTools, FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <h2 className={styles.sectionHeading} data-aos="fade-down">About Me</h2>
        <Row className="align-items-center">
          <Col lg={6} className={styles.imageContainer} data-aos="fade-right">
            <img
              className={styles.aboutImage}
              src="/image/new_dp.jpg"
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
              Developer skilled in the MERN stack (MongoDB, Express.js,
              React.js, Node.js). I build scalable web applications with clean,
              responsive UIs and strong backend integration. I enjoy turning
              ideas into user-friendly, high-performance solutions while staying
              updated with modern web development trends.
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
