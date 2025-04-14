import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaLaptopCode,
  FaShoppingCart,
  FaChalkboardTeacher,
  FaCommentAlt,
} from "react-icons/fa";
import styles from "./styles/Projects.module.css";

const projects = [
  {
    title: "Teacher Dashboard",
    icon: <FaChalkboardTeacher className={styles.projectIcon} />,
    src: "./image/teacher_dashboard.png",
    alt: "Teacher Dashboard",
    live: "https://teacher-dashboard-task.vercel.app/",
    desc: "The Teacher Dashboard is a comprehensive web application designed to streamline classroom management, featuring robust student administration with full CRUD (Create, Read, Update, Delete) functionality and efficient attendance tracking. Built with a modern tech stack including ReactJS and Vite for a fast, responsive frontend, Material-UI (MUI) for sleek user interface components, and powered by a Node.js/Express.js backend with MongoDB database, the application demonstrates my ability to develop complete, full-stack solutions.",
    tech: ["React", "Node.js", "MongoDB", "Material UI"],
  },
  {
    title: "Multi-vendor E-commerce",
    icon: <FaShoppingCart className={styles.projectIcon} />,
    src: "./image/multi-vendor.png",
    alt: "E-commerce Platform",
    live: "https://multi-vendor-eta.vercel.app/index.html",
    desc: "This project is a multi-vendor e-commerce platform built with HTML, CSS, Bootstrap, and JavaScript for the frontend, and Firebase for real-time database and authentication. The application supports seller and buyer accounts, allowing vendors to create, edit, and delete (CRUD) product listings, while customers can browse products and add items to their cart.",
    tech: ["JavaScript", "Firebase", "Bootstrap"],
  },
  {
    title: "Portfolio Creator",
    icon: <FaLaptopCode className={styles.projectIcon} />,
    src: "/image/portfolio-creator.png",
    alt: "Portfolio Creator",
    live: "https://portfolio-creater-six.vercel.app/",
    desc: "I developed a fully responsive Portfolio Website Creator using HTML5, CSS3 (Grid/Flexbox), and JavaScript, enabling users to customize their portfolio through an intuitive form with real-time previews. The app dynamically generates a downloadable HTML file with one click, offering personalized styling options like fonts, colors, and layouts.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Feedback Form",
    icon: <FaCommentAlt className={styles.projectIcon} />,
    src: "./image/feedback.png",
    alt: "Feedback Form",
    live: "https://feedback2-pearl.vercel.app/",
    desc: "I created a responsive feedback form using React.js (via CDN links) with a CSS Grid layout that adapts seamlessly to mobile, tablet, and desktop screens. The form collects user input and stores it in Firebase for real-time data management. A toggle button enables switching between dark and light modes.",
    tech: ["React", "Firebase", "CSS Grid"],
  },
];

function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const hoverTimer = useRef(null);

  const handleMouseEnter = (index) => {
    hoverTimer.current = setTimeout(() => {
      setActiveModal(index);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    };
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.skillsHeading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.projectHeader}>
              {project.icon}
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
            <img
              src={project.src}
              alt={project.alt}
              className={styles.projectImage}
            />
            <div className={styles.projectFooter}>
              <Link
                to={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <FaExternalLinkAlt /> View Live
              </Link>
            </div>
          </div>
        ))}
      </div>

      {activeModal !== null && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <div className={styles.modalHeader}>
              {projects[activeModal].icon}
              <h3>{projects[activeModal].title}</h3>
            </div>
            <img
              src={projects[activeModal].src}
              alt={projects[activeModal].alt}
              className={styles.modalImage}
            />
            <div className={styles.techStack}>
              {projects[activeModal].tech.map((tech, i) => (
                <span key={i} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
            <p className={styles.modalDescription}>
              {projects[activeModal].desc}
            </p>
            <Link
              to={projects[activeModal].live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              <FaExternalLinkAlt /> Visit Project
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
