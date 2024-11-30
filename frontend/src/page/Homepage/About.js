import React from "react";
import styles from "./styles/About.module.css";


function About() {
  return (
    <div>
      <div className={styles.about_container}>
        <div className={styles.images_container}>
          <img
            className={styles.about_image}
            src="/image/profile_image.jpg"
            alt=""
          />
        </div>
        <div className={styles.summary_container}>
          <p className={styles.summary}>
            I'm <strong className="text-danger"> Rahul Kumar</strong>, a
            passionate
            <strong className="fst-italic"> Full Stack Developer</strong> with a
            knack for problem-solving. With expertise spanning both frontend and
            backend technologies, I specialize in crafting dynamic and
            user-friendly web applications. My strong problem-solving skills
            empower me to tackle complex challenges head-on and deliver
            innovative solutions. Let's collaborate to turn ideas into reality
            and create remarkable digital experiences together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
