import React from "react";
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function Header() {
  return (
    <Layout>
      <div id="about" className={`container ${styles.header}`}>
        <div className={styles.col}>
          <h5 className={`text-primary ${styles.hello}`}>Hello,</h5>
          <div className={styles.adminNames}>
            <h2 className={`fw-bolder ${styles.adminName}`}>I'm Rahul Kumar</h2>
          </div>

          <h6 className={`fst-italic ${styles.animation}`}>
            Full Stack Web Developer
          </h6>
          <Link
            className={styles.linkPdf}
            to={"/resume4.0.pdf"}
            target="_blank"
          >
            Download Resume
          </Link>
        </div>
        <div className={styles.col}>
          <img className={styles.header_image} src="/image/image.svg" alt="" />
        </div>
      </div>
    </Layout>
  );
}

export default Header;
