import React from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaShoppingCart,
  FaMedkit,
  FaSuitcaseRolling,
  FaBuilding,
  FaChalkboardTeacher
} from "react-icons/fa";
import styles from "./styles/Projects.module.css";

const projects = [
  {
    title: "Tenant-Landlord Communication Platform (MERN App)",
    icon: <FaBuilding className={styles.projectIcon}/>,
    src: "./image/tenant-landlord.png",
    alt: "tenant-landlord communication",
    live: "https://tenant-landlord-communication-platf-six.vercel.app/",
    desc: "I developed a full-stack Tenant-Landlord Communication Platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows tenants and landlords to manage rental properties efficiently. The platform supports two user roles with separate dashboards, enabling tenants to raise and track maintenance requests with categories, urgency levels, and media uploads, while landlords can view and respond to those issues in real time. It includes a secure messaging system for direct communication, a rent payment tracker with due date reminders, a maintenance history report export feature, and an appointment scheduling calendar. The UI is fully responsive using CSS Grid Layout, with modern hover effects, animations, and mobile-first design, making the interface clean, interactive, and user-friendly.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Redux Toolkit", "REST API", "JWT","Nodemailer"]
  },
  {
    title: "Travel Itinerary Planner (MERN App)",
    icon: <FaSuitcaseRolling className={styles.projectIcon} />,
    src: "./image/travel.png",
    alt: "Travel Itinerary Planner App",
    live: "https://travel-itinerary-planning-tool.vercel.app/",
    desc: "A full-stack web application that helps users easily plan trips, track expenses, and collaborate with friends in real-time. The app allows users to register/login with secure OTP-based email verification, manage trip details with automatic duration and cost calculations, and invite others via email to co-plan a trip. Users can log expenses by category, with live updates to the total cost. Built with React, Node.js, and MongoDB, the platform features a clean, responsive UI and offers a smooth user experience on both desktop and mobile devices.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
      "Framer Motion",
    ],
  },
  {
    title: "Mentor Management & Payment Tracking System",
    icon: <FaChalkboardTeacher className={styles.projectIcon}/>,
    src: "./image/home.png",
    alt: "Mentor Management & payment tracking system",
    live: "https://automation-payment.vercel.app",
    desc: "Automation-Payment is a web platform built with React (Vite) and Firebase to manage mentoring sessions, lecture schedules, and payments between admins and mentors. It features secure authentication, real-time updates, and separate dashboards for admins and mentors. Admins can add mentors, schedule lectures, and process payments, while mentors can track sessions, earnings, and update profiles. Key highlights include PDF receipt generation, responsive design, Framer Motion animations, and pagination for efficient data handling.",
    tech: ["React.js", "Firebase", "Bootstrap 5", "Framer Motion", "Redux Toolkit"]
    
  },
  {
    title: "Prescription and Medication Management Tool",
    icon: <FaMedkit className={styles.projectIcon} />,
    src: "./image/medication.png",
    alt: "Prescription Management Tool",
    live: "https://medication-management-tool.vercel.app/",
    desc: "A fully responsive Prescription and Medication Management Tool built with React + Vite for blazing-fast performance. Features Firebase for real-time database & authentication, Bootstrap + Redux Toolkit for seamless state management & UI, Framer Motion for smooth animations, and Ant Design for UI components with guided tour onboarding.",
    tech: [
      "React.js",
      "Firebase",
      "Redux Toolkit",
      "Bootstrap",
      "Framer Motion",
      "Ant Design",
    ],
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
