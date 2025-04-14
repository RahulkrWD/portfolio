import React, { useEffect } from "react";
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import { FaDownload, FaCode, FaServer, FaPalette } from "react-icons/fa";

function Header() {
  useEffect(() => {
    // Trigger animation on mount
    const elements = document.querySelectorAll(`.${styles.animateOnLoad}`);
    elements.forEach((el) => {
      el.style.animation = "none";
      void el.offsetHeight; // Trigger reflow
      el.style.animation = null;
    });
  }, []);

  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.textContent} ${styles.animateOnLoad}`}>
            <h5 className={styles.hello}>Hello,</h5>
            <div className={styles.adminNames}>
              <h1 className={styles.adminName}>I'm Rahul Kumar</h1>
            </div>

            <div className={styles.animatedText}>
              <h6 className={styles.animation}>Full Stack Web Developer</h6>
            </div>

            <div className={styles.skillsIcons}>
              <div className={styles.iconWithText}>
                <FaCode className={styles.icon} />
                <span>Frontend</span>
              </div>
              <div className={styles.iconWithText}>
                <FaServer className={styles.icon} />
                <span>Backend</span>
              </div>
              <div className={styles.iconWithText}>
                <FaPalette className={styles.icon} />
                <span>UI/UX</span>
              </div>
            </div>

            <Link
              className={styles.linkPdf}
              to="/rahul-cv1.pdf"
              target="_blank"
            >
              <FaDownload className={styles.downloadIcon} />
              Download Resume
            </Link>
          </div>

          <div className={`${styles.imageContainer} ${styles.animateOnLoad}`}>
            <img
              className={styles.header_image}
              src="/image/image.svg"
              alt="Developer Illustration"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
