import React, { useEffect, useState } from "react";
import styles from "./styles/Skills.module.css";
import Layout from "../../components/Layout";
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "MongoDB",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Git/GitHub",
  "Material-UI",
  "Redux Toolkit",
  "Core Java",
  "Oracle Database",
  "SQL/MySQL",
  "Agile Methodology",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className={styles.loop_slider}
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <h6 className={styles.tag_name}>
    <span className={styles.span_tag}>#</span> {text}
  </h6>
);

const Skills = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const newTags = [];
    for (let i = 0; i < ROWS; i++) {
      newTags.push(
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      );
    }
    setTags(newTags);
  }, []);

  return (
    <Layout>
      <div>
        <h5 className="text-center p-1 text-bg-secondary mt-5">Skills</h5>
        <div className={styles.apps}>
          <div className={styles.tag_list}>
            {tags}
            <div className={styles.fade} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
