import React from "react";
import styles from "../styleSheet/ReactTab.module.css";
import { Link } from "react-router-dom";

function Projects() {
  const project = [
    {
      project_Name: "weather App",
      video: "/video/Weather app.mp4",
      demo_link: "https://verdant-licorice-65c812.netlify.app",
    },
    {
      project_Name: "FrontEnd",
      video: "/video/Frontend APP.mp4",
      demo_link:
        "https://657c6d2c03d8d22459c0a3c7--snazzy-starlight-1e9cd9.netlify.app",
    },
    {
      project_Name: "Zomato Clone",
      video: "/video/Zomato clone (1).mp4",
      demo_link: "https://ed-zomato-app.vercel.app",
    },
    {
      project_Name: "Netflix Clone",
      video: "/video/Netflix clone.mp4",
      demo_link: "https://ed-assignment.vercel.app/Netflix.html",
    },
  ];
  return (
    <div className={styles.projectArea}>
      {project.map((data, index) => (
        <div key={index}>
          <video
            className={styles.videoImage}
            src={data.video}
            controls
            autoPlay
          />
          <h5>{data.project_Name}</h5>
          <Link
            className="text-decoration-none fw-bold fs-5"
            to={`${data.demo_link}`}
            target="_blank"
          >
            Demo
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;
