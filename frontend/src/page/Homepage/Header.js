import React from "react";
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Header() {
  return (
  <>
  <Navbar/>
      <div id="about" className={`container ${styles.header}`}>
        <div className={styles.col}>
          <h5 className={styles.hello}>Hello,</h5>
          <div className={styles.adminNames}>
            <h2 className={`fw-bolder ${styles.adminName}`}>I'm Rahul Kumar</h2>
          </div>

          <h6 className={`fst-italic ${styles.animation}`}>
            Full Stack Web Developer
          </h6>
          <Link
            className={styles.linkPdf}
            to={"/mern-c.pdf"}
            target="_blank"
          >
            Download Resume
          </Link>
        </div>
        <div className={styles.col}>
          <img className={styles.header_image} src="/image/image.svg" alt="" />
        </div>
      </div>
      </>
  );
}

export default Header;
