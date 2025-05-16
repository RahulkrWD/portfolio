import React from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaChalkboardTeacher,
  FaCommentAlt,
  FaMedkit,
} from "react-icons/fa";
import styles from "./styles/Projects.module.css";

const projects = [
  {
    title: "Prescription and Medication Management Tool",
    icon: <FaMedkit className={styles.projectIcon} />,
    src: "./image/medication.png",
    alt: "Prescription Management Tool",
    live: "https://medication-management-tool.vercel.app/",
    desc: "A fully responsive Prescription and Medication Management Tool built with React + Vite for blazing-fast performance. Features Firebase for real-time database & authentication, Bootstrap + Redux Toolkit for seamless state management & UI, Framer Motion for smooth animations, and Ant Design for UI components with guided tour onboarding.",
    tech: [
      "React",
      "Firebase",
      "Redux Toolkit",
      "Bootstrap",
      "Framer Motion",
      "Ant Design",
    ],
  },
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
    github: "#",
    desc: "I developed a fully responsive Portfolio Website Creator using HTML5, CSS3 (Grid/Flexbox), and JavaScript, enabling users to customize their portfolio through an intuitive form with real-time previews. The app dynamically generates a downloadable HTML file with one click, offering personalized styling options like fonts, colors, and layouts.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Feedback Form",
    icon: <FaCommentAlt className={styles.projectIcon} />,
    src: "./image/feedback.png",
    alt: "Feedback Form",
    live: "https://feedback2-pearl.vercel.app/",
    github: "#",
    desc: "I created a responsive feedback form using React.js (via CDN links) with a CSS Grid layout that adapts seamlessly to mobile, tablet, and desktop screens. The form collects user input and stores it in Firebase for real-time data management. A toggle button enables switching between dark and light modes.",
    tech: ["React", "Firebase", "CSS Grid"],
  },
];

function Projects() {
  return (
    <section id="projects" className={`container ${styles.projectsSection}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>Things I've built so far</p>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectItem} ${
              index % 2 === 0 ? styles.leftImage : styles.rightImage
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className={styles.projectImageContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.src}
                  alt={project.alt}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <p className={styles.projectNumber}>0{index + 1}</p>
                {project.icon}
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>

              <p className={styles.projectDescription}>{project.desc}</p>

              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <Link
                  to={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <FaExternalLinkAlt /> Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
