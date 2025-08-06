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

  const handleResumeDownload = () => {
    // URL for viewing in new tab (regular Google Drive view link)
    const viewUrl = "https://drive.google.com/file/d/1_G9eZ56C3SB7Us5Ls-7QXSC-PDlwq_f0/view";

    // URL for downloading (Google Drive direct download link)
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1_G9eZ56C3SB7Us5Ls-7QXSC-PDlwq_f0";

    // Open in new tab
    window.open(viewUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Rahul_Kumar_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header id="header" className={styles.header}>
      <div className="container">
        <div className="row align-items-center">
          <div
            className={`col-lg-6 col-md-12 ${styles.textContent} ${isVisible ? styles.visible : ""
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

              <button className={styles.linkPdf}
                onClick={handleResumeDownload}
              >
                <FaDownload className={styles.downloadIcon} />
                Download Resume
              </button>


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
