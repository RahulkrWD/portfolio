import React from "react";
import styles from "./styles/About.module.css";

function About() {
  return (
    <div className={styles.about_container}>
      <img className={styles.about_image} src="/image/new_dp.jpg" alt="" />
      <p className={styles.summary}>
        To work in a dynamic environment that allows me to gain and share
        knowledge while enhancing my skills in MERN Stack technologies. I aim to
        utilize my expertise in JavaScript, ReactJS, Node.js, and MongoDB to
        contribute effectively to the organization's success and achieve
        personal and professional growth. Seeking a challenging position in a
        technical organization where I can apply my abilities to deliver
        innovative web solutions short this career objective and i'm think to
        add in this my portfolio web site
      </p>
    </div>
  );
}

export default About;
