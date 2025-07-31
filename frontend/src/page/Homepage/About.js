import React from "react";
import styles from "./styles/About.module.css";

function About() {
  return (
    <section
      id="about"
      className={`${styles.aboutSection} py-5 px-3 px-md-5 container`}
    >
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
              Developer skilled in the MERN stack (MongoDB, Express.js,
              React.js, Node.js). I build scalable web applications with clean,
              responsive UIs and strong backend integration. I enjoy turning
              ideas into user-friendly, high-performance solutions while staying
              updated with modern web development trends.
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
