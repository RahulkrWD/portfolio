import React from "react";
import styles from "../styleSheet/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={`container ${styles.header}`}>
      <div className={styles.col}>
        <h5 className={`text-primary ${styles.hello}`}>Hello,</h5>
        <div className={styles.adminNames}>
          <h2 className={`fw-bolder ${styles.adminName}`}>I'm Rahul Kumar</h2>
        </div>

        <h6 className={`fst-italic ${styles.animation}`}>
          Full Stack Web Developer
        </h6>
        {/* <Link
          className={`btn text-bg-success m-2 fw-bold ${styles.linkPdf}`}
          to={"/image/resume(full).pdf"}
          target="_blank"
        >
          Download Resume
        </Link> */}
      </div>
      <div className={styles.col}>
        <img
          className={styles.profileImg}
          src="/image/IMG_20231003_221759_137-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
