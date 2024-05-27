import React, { useState, useEffect } from "react";
import styles from "./styles/Projects.module.css";

const images = [
  {
    src: "https://i.ibb.co/mT01k9B/dep.png",
    alt: "Image 1",
    live: "https://dep-com.vercel.app",
  },
  {
    src: "https://i.ibb.co/9GDF1NV/zomato.png",
    alt: "Image 2",
    live: "https://ed-zomato-app.vercel.app/",
  },
  {
    src: "https://i.ibb.co/3cGG12v/weather-app.png",
    alt: "Image 3",
    live: "https://verdant-licorice-65c812.netlify.app/",
  },
  {
    src: "https://i.ibb.co/GR3yRRD/netflix.png",
    alt: "Image 4",
    live: "https://ed-assignment.vercel.app/Netflix.html",
  },
  {
    src: "https://i.ibb.co/GHvJfzx/frontend-4.png",
    alt: "Image 5",
    live: "https://657c6d2c03d8d22459c0a3c7--snazzy-starlight-1e9cd9.netlify.app/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h5 className="text-center p-1 text-bg-secondary mt-4">Projects</h5>
      <div className={styles.imageSide}>
        <button
          onClick={prevSlide}
          className={`btn text-bg-secondary ${styles.sliderButton}`}
        >
          Previous
        </button>
        <div className={styles.imageContainer}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className={styles.sliderImage}
          />
          <a
            href={images[currentIndex].live}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn text-bg-success fw-bold ${styles.liveButton}`}
          >
            Live Project
          </a>
        </div>
        <button
          onClick={nextSlide}
          className={`btn text-bg-secondary ${styles.sliderButton}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
