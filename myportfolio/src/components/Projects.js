import React from "react";
import styles from "../styleSheet/ReactTab.module.css";
import { Link } from "react-router-dom";

function Projects() {
  const project = [
    {
      project_Name: "weather App",
      video:
        "video/All products e-commerce - Google Chrome 2024-02-19 23-44-39.mp4",
      demo_link: "https://verdant-licorice-65c812.netlify.app",
    },
    {
      project_Name: "Currency Converter",
      video:
        "video/All products e-commerce - Google Chrome 2024-02-19 23-44-39.mp4",
      demo_link:
        "https://657f492db77199255e4c775a--coruscating-lily-fe2b3c.netlify.app",
    },
    {
      project_Name: "FrontEnd",
      video:
        "video/All products e-commerce - Google Chrome 2024-02-19 23-44-39.mp4",
      demo_link:
        "https://657c6d2c03d8d22459c0a3c7--snazzy-starlight-1e9cd9.netlify.app",
    },
  ];
  return (
    <div className={styles.projectArea}>
      {project.map((data) => (
        <div>
          <center>
            <video
              className={styles.videoImage}
              src={data.video}
              controls
              autoPlay
            />
            <h5>{data.project_Name}</h5>
            <Link to={`${data.demo_link}`} target="_blank">
              Click
            </Link>
          </center>
        </div>
      ))}
    </div>
  );
}

export default Projects;
