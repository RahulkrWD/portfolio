import React, { useState } from "react";
import styles from "./styles/Projects.module.css";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://i.ibb.co/mT01k9B/dep.png",
    alt: "Image 1",
    live: "https://dep-com.vercel.app",
    desc: "Dep.com is a MERN stack-based e-commerce app featuring secure OTP-based user verification with Nodemailer, advanced product search and filters, sorting and pricing, coupon discounts, direct WhatsApp support, and seamless Razorpay payment integration. Leveraging Redux Toolkit, Material-UI, and Bootstrap, it provides a user-friendly and secure shopping experience. This project highlights my ability to create robust web applications.",
  },
  {
    src: "https://i.ibb.co/9GDF1NV/zomato.png",
    alt: "Image 2",
    live: "https://ed-zomato-app.vercel.app/",
    desc: "The Zomato clone, developed using the MERN stack, features secure JWT authentication for seamless user registration and login, location-based restaurant search, detailed views of restaurant menus and information, and streamlined user interaction through pagination and menu filtering. This project highlights my skills in building secure and user-friendly web applications.",
  },
  {
    src: "https://i.ibb.co/3cGG12v/weather-app.png",
    alt: "Image 3",
    live: "https://verdant-licorice-65c812.netlify.app/",
    desc: "The Weather App, created using HTML, CSS, JavaScript, and a weather API, provides real-time weather updates, detailed forecasts, and current weather conditions based on user location. The app features a clean and responsive design, ensuring a seamless user experience across devices. This project showcases my ability to integrate APIs and create interactive, user-friendly web applications.",
  },
  {
    src: "https://i.ibb.co/GHvJfzx/frontend-4.png",
    alt: "Image 5",
    live: "https://657c6d2c03d8d22459c0a3c7--snazzy-starlight-1e9cd9.netlify.app/",
    desc: "The frontend website, created using HTML and CSS, features a user-friendly and responsive design. It ensures an optimal user experience across desktop, tablet, and mobile devices, demonstrating my skills in building visually appealing and adaptable web interfaces.",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(Array(images.length).fill(false));

  const toggleShowMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <div>
      <h5 className="text-center p-1 text-bg-secondary mt-4">Projects</h5>
      <div style={{ marginTop: "50px" }}>
        {images.map((items, index) => (
          <div
            className={`${styles.Projects_container} ${
              index % 2 === 0 ? "" : styles.alt_layout
            }`}
            key={index}
          >
            <img
              className={styles.project_image}
              src={items.src}
              alt={items.alt}
            />
            <div className={styles.Projects_desc}>
              <p>
                {showMore[index]
                  ? items.desc
                  : `${items.desc.substring(0, 100)}...`}
              </p>
              <center>
                <button
                  className="btn text-bg-danger m-2 fw-bold"
                  onClick={() => toggleShowMore(index)}
                >
                  {showMore[index] ? "Show Less" : "Show More"}
                </button>
                <Link
                  className="btn text-bg-primary m-2 fw-bold"
                  to={items.live}
                  target="_blank"
                >
                  Live
                </Link>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
