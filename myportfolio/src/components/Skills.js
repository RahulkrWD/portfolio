import React from "react";
import styles from "../styleSheet/ReactTab.module.css";

function Skills() {
  return (
    <div className={`container ${styles.skillsContainer}`}>
      <img className={`${styles.icons}`} src="/image/HTML.png" alt="HTML" />
      <img className={`${styles.icons}`} src="image/CSS.png" alt="CSS" />
      <img
        className={`${styles.icons}`}
        src="image/bootstrap.jpg"
        alt="Bootstrap"
      />
      <img
        className={`${styles.icons}`}
        src="/image/javascript.jpg"
        alt="JavaScript"
      />
      <img
        className={`${styles.icons}`}
        src="/image/reactjs.png"
        alt="ReactJs"
      />
      <img
        className={`${styles.icons}`}
        src="/image/mongodb.png"
        alt="MongoDB"
      />
      <img
        className={`${styles.icons}`}
        src="/image/nodeJs_express.png"
        alt="Node_Express"
      />
      <img className={`${styles.icons}`} src="/image/linux.png" alt="Linux" />
      <img className={`${styles.icons}`} src="/image/GitHub.png" alt="GitHub" />
    </div>
  );
}

export default Skills;
