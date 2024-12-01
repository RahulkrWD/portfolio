import React from "react";
import styles from "./styles/Projects.module.css";
import { Link } from "react-router-dom";

const images = [
  {
    title: "E-commerce website",
    src: "https://i.ibb.co/mT01k9B/dep.png",
    alt: "Image 1",
    live: "https://dep-com.vercel.app",
    desc: "Dep.com is a MERN stack e-commerce app with OTP-based verification, product search, sorting, coupon discounts, WhatsApp support, and Razorpay integration. Built using Redux Toolkit, Material-UI, and Bootstrap, it ensures a secure and user-friendly shopping experience, showcasing my skills in developing robust web applications.",
  },
  {
    title: "Zomato Clone",
    src: "https://i.ibb.co/9GDF1NV/zomato.png",
    alt: "Image 2",
    live: "https://ed-zomato-app.vercel.app/",
    desc: "The Zomato clone, built with the MERN stack, includes JWT authentication, location-based restaurant search, detailed menus, pagination, and menu filtering. It showcases my skills in creating secure and user-friendly web applications.",
  },
  {
    title: "Weather App",
    src: "https://i.ibb.co/3cGG12v/weather-app.png",
    alt: "Image 3",
    live: "https://verdant-licorice-65c812.netlify.app/",
    desc: "The Weather App, built with HTML, CSS, JavaScript, and a weather API, delivers real-time updates, forecasts, and location-based conditions. Its responsive design showcases my skills in API integration and creating interactive web applications.",
  },
  {
    title: "Frontend Website",
    src: "https://i.ibb.co/GHvJfzx/frontend-4.png",
    alt: "Image 5",
    live: "https://657c6d2c03d8d22459c0a3c7--snazzy-starlight-1e9cd9.netlify.app/",
    desc: "This frontend website, built with HTML and CSS, offers a responsive design for an optimal user experience across all devices, showcasing my skills in creating adaptable web interfaces.",
  },
];

function Projects(){
  return (
    <div id="projects" className="main_container">
      <h2 className="project_heading">Projects</h2>
      <div className={styles.project_container}>
        {images.map((item, index) => (
          <div
            key={index}
          >
          <h4 className={styles.title_heading}>{item.title}</h4>
            <div className={styles.projectCard}>
            
              <img
                className={styles.projectImage}
                src={item.src}
                alt={item.alt}
              />
              <div className={styles.projectOverlay}>
                <p className={styles.desc}>{item.desc}</p>
                <Link
                  to={item.live}
                  target="_blank"
                >
                 <i className="fa-solid fa-up-right-from-square"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
