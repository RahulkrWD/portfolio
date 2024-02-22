import React from "react";
import styles from "../styleSheet/ReactTab.module.css";

function About() {
  return (
    <div className={`container ${styles.aboutUs}`}>
      <p className="fw-bold">
        Hey, I'm Rahul Kumar, hailing from Bihar. Proudly, I've just completed
        the Edureka internship program, specializing in Full Stack Web
        Development.
      </p>
      <p className="fw-bold">
        Passionate about technology, I decided to dive into the dynamic realm of
        web development. The Edureka internship equipped me with skills in the
        MERN (MongoDB, Express.js, React.js, Node.js) stack, honing my abilities
        to craft robust and engaging web solutions.
      </p>
    </div>
  );
}

export default About;
