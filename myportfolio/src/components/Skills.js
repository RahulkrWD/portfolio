import React from "react";
import styles from "../styleSheet/ReactTab.module.css";

function Skills() {
  const data = [
    { image: "/image/HTML.png" },
    { image: "/image/CSS.png" },
    { image: "/image/bootstrap.jpg" },
    { image: "/image/javascript.jpg" },
    { image: "/image/reactjs.png" },
    { image: "/image/mongodb.png" },
    { image: "/image/nodeJs_express.png" },
    { image: "/image/linux.png" },
    { image: "/image/GitHub.png" },
  ];
  return (
    <div className={`container ${styles.skillsContainer}`}>
      {data.map((items, index) => (
        <div key={index}>
          <img className={`${styles.icons}`} src={items.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Skills;
