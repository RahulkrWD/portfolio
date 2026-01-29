import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaShoppingCart,
  FaMedkit,
  FaSuitcaseRolling,
  FaBuilding,
  FaChalkboardTeacher,
  FaGithub,
} from "react-icons/fa";
import { Container } from "react-bootstrap";
import styles from "./styles/Projects.module.css";
import SectionHeading from "../../components/SectionHeading";

const webProjects = [
  {
    title: "Tenant-Landlord Communication Platform (MERN App)",
    icon: <FaBuilding className="text-primary" size={24} />,
    src: "./image/tenant-landlord.png",
    alt: "tenant-landlord communication",
    live: "https://tenant-landlord-communication-platf-six.vercel.app/",
    github:
      "https://github.com/RahulkrWD/Tenant-Landlord-Communication-Platform",
    desc: "Full-stack MERN platform with separate tenant and landlord dashboards, real-time maintenance requests, secure chat, rent tracking, reminders, and appointment calendar. Fully responsive with smooth animations.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
      "Bootstrap",
    ],
  },
  {
    title: "Travel Itinerary Planner (MERN App)",
    icon: <FaSuitcaseRolling className="text-info" size={24} />,
    src: "./image/travel.png",
    alt: "Travel Itinerary Planner App",
    live: "https://travel-itinerary-planning-tool.vercel.app/",
    github: "https://github.com/RahulkrWD/Travel-Itinerary-Planning-Tool",
    desc: "Plan trips, track expenses, and collaborate with friends in real time. Includes OTP-based auth, automatic duration and cost calculations, and live expense updates with a clean, responsive UI.",
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
    icon: <FaChalkboardTeacher className="text-warning" size={24} />,
    src: "./image/home.png",
    alt: "Mentor management & payment tracking system",
    live: "https://automation-payment.vercel.app",
    github: "https://github.com/RahulkrWD/Automation-payment",
    desc: "Web platform for managing mentors, lecture schedules, and payments. Features secure auth, real-time updates, dashboards for admins/mentors, PDF receipt generation, and paginated data tables.",
    tech: [
      "React.js",
      "Firebase",
      "Bootstrap 5",
      "Framer Motion",
      "Redux Toolkit",
    ],
  },
  {
    title: "Prescription & Medication Management Tool",
    icon: <FaMedkit className="text-danger" size={24} />,
    src: "./image/medication.png",
    alt: "Prescription management tool",
    live: "https://medication-management-tool.vercel.app/",
    github: "https://github.com/RahulkrWD/medication-management-tool",
    desc: "React + Vite application for managing prescriptions and medications with real-time Firebase data, authentication, Ant Design components, guided tours, and motion-based micro-interactions.",
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
    icon: <FaShoppingCart className="text-success" size={24} />,
    src: "./image/multi-vendor.png",
    alt: "E-commerce platform",
    live: "https://multi-vendor-eta.vercel.app/index.html",
    github: "https://github.com/RahulkrWD/multi-vendor",
    desc: "Multi-vendor store built with HTML/CSS/Bootstrap/JavaScript and Firebase. Supports seller and buyer flows, CRUD product management, and real-time cart operations.",
    tech: ["JavaScript", "Firebase", "Bootstrap"],
  },
];

const mobileProjects = [
  {
    title: "Personal Finance Tracker (React Native)",
    icon: <FaSuitcaseRolling className="text-info" size={24} />,
    src: "./image/portfolio-creator.png",
    alt: "Personal finance tracker app",
    live: "#",
    github: "#",
    desc: "Cross-platform mobile app to track daily expenses, budgets, and savings goals. Uses React Native UI, Zustand for predictable global state, and a NestJS + MongoDB backend for secure APIs and analytics.",
    tech: ["React Native", "TypeScript", "Zustand", "NestJS", "MongoDB"],
  },
  {
    title: "Habit & Wellness Companion",
    icon: <FaMedkit className="text-danger" size={24} />,
    src: "./image/medication.png",
    alt: "Habit and wellness companion app",
    live: "#",
    github: "#",
    desc: "Mobile app to build healthy routines with streaks, reminders, and progress insights. Built with React Native, Zustand, and a NestJS + MongoDB backend for users, habits, and notifications.",
    tech: ["React Native", "Zustand", "NestJS", "MongoDB", "REST API"],
  },
  {
    title: "Event Booking & Check-in",
    icon: <FaBuilding className="text-primary" size={24} />,
    src: "./image/travel.png",
    alt: "Event booking and check-in app",
    live: "#",
    github: "#",
    desc: "Event booking app where users browse events, book seats, and check in with QR codes. React Native frontend with a NestJS + MongoDB backend managing bookings, tickets, and JWT-secured sessions.",
    tech: ["React Native", "TypeScript", "NestJS", "MongoDB", "JWT"],
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("web"); // 'web' | 'mobile'

  const projectsToShow = activeTab === "web" ? webProjects : mobileProjects;

  return (
    <section id="projects" className={styles.projectSection}>
      <div className={`container ${styles.fullContainer}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerContent}>
            <SectionHeading
              title="My Projects"
              subtitle="Selected work across web and mobile applications"
              align="left"
            />
          </div>
        </div>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${
              activeTab === "web" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Applications
          </button>
          <button
            type="button"
            className={`${styles.tab} ${
              activeTab === "mobile" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            Mobile Applications
          </button>
        </div>

        <div className={styles.projectGrid}>
          {projectsToShow.map((project, index) => (
            <article
              key={index}
              className={styles.projectCard}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>{project.icon}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>

              <div className={styles.projectImageSection}>
                <img
                  src={project.src}
                  alt={project.alt}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <p className={styles.projectDescription}>{project.desc}</p>
                </div>
              </div>

              <div className={styles.projectContentSection}>
                <div className={styles.techStackSection}>
                  <h4 className={styles.techStackTitle}>Tech Stack</h4>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techItem}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectActions}>
                  {project.live && project.live !== "#" && (
                    <Link
                      to={project.live}
                      className={`${styles.actionButton} ${styles.liveButton}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className={styles.actionIcon} />
                      Live Preview
                    </Link>
                  )}
                  {project.github && project.github !== "#" && (
                    <Link
                      to={project.github}
                      className={`${styles.actionButton} ${styles.codeButton}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className={styles.actionIcon} />
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
