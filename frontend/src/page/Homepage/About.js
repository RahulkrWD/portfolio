import React from "react";
import styles from "./styles/About.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>About Me</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.imageContainer}>
            <img
              className={styles.aboutImage}
              src="/image/new_dp.jpg"
              alt="Profile"
            />
            <div className={styles.iconBadges}>
              <i className="fa-brands fa-html5" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt" title="CSS3"></i>
              <i className="fa-brands fa-js" title="JavaScript"></i>
              <i className="fa-brands fa-react" title="React"></i>
              <i className="fa-brands fa-node-js" title="Node.js"></i>
              <i className="fa-solid fa-database" title="MongoDB"></i>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              <span className={styles.firstLetter}>P</span>assionate Full Stack
              Developer specializing in modern web technologies with expertise
              in the MERN stack (MongoDB, Express.js, React.js, Node.js). I
              build robust, scalable applications with intuitive interfaces that
              deliver exceptional user experiences. My approach combines
              technical precision with creative problem-solving to transform
              ideas into functional, high-performance web solutions.
            </p>
            <p className={styles.aboutText}>
              With strong foundations in both frontend and backend development,
              I particularly excel at creating interactive UIs with React while
              ensuring seamless integration with server-side functionality. I
              stay current with industry trends and best practices, continuously
              refining my skills to implement cutting-edge solutions.
            </p>
            <div className={styles.aboutHighlights}>
              <div className={styles.highlightItem}>
                <i className="fa-solid fa-laptop-code"></i>
                <span>Full Stack Proficiency</span>
              </div>
              <div className={styles.highlightItem}>
                <i className="fa-solid fa-layer-group"></i>
                <span>Modern Architecture</span>
              </div>
              <div className={styles.highlightItem}>
                <i className="fa-solid fa-rocket"></i>
                <span>Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
