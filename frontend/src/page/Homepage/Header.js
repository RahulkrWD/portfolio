import React, { useEffect, useState } from "react";
import styles from "./styles/Header.module.css";
import { FaDownload, FaCode, FaServer } from "react-icons/fa";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
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
      <div className="container">
        <div className="row align-items-center">
          <div
            className={`col-lg-6 col-md-12 ${styles.textContent} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <h5 className={styles.hello}>Hi there 👋, I'm</h5>
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
            </div>

            <div className={styles.buttonGroup}>
              <a className={styles.linkPdf} href="/rahul-9.pdf" download>
                <FaDownload className={styles.downloadIcon} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className={`${styles.imageContainer} ${styles.animateOnLoad}`}>
              <img
                className={styles.header_image}
                src="/image/background-image-removebg-preview.png"
                alt="Developer Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
