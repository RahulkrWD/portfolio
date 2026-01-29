import React from "react";
import styles from "./SectionHeading.module.css";

function SectionHeading({ title, subtitle, align = "center" }) {
  return (
    <div className={`${styles.wrap} ${styles[align]}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}

export default SectionHeading;

