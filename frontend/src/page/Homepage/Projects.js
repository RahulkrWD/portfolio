import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaShoppingCart,
  FaMedkit,
  FaSuitcaseRolling,
  FaBuilding,
  FaChalkboardTeacher,
  FaGithub,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { Container } from "react-bootstrap";
import "animate.css";
import styles from "./styles/Projects.module.css";


const projects = [
  {
    title: "Tenant-Landlord Communication Platform (MERN App)",
    icon: <FaBuilding className="text-primary" size={24} />,
    src: "./image/tenant-landlord.png",
    alt: "tenant-landlord communication",
    live: "https://tenant-landlord-communication-platf-six.vercel.app/",
    github: "https://github.com/RahulkrWD/Tenant-Landlord-Communication-Platform",
    desc: "I created a Tenant-Landlord Communication Platform using the MERN stack. It has two separate dashboards – one for tenants and one for landlords. Tenants can raise maintenance requests with categories, urgency levels, and photos or videos. Landlords can view and reply to these requests in real-time. The platform also includes secure chat, rent tracking with due date reminders, maintenance history download, and a calendar for scheduling appointments. The design is fully responsive, mobile-friendly, and easy to use, with clean layout and smooth animations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Redux Toolkit", "REST API", "JWT", "Nodemailer"]
  },
  {
    title: "Travel Itinerary Planner (MERN App)",
    icon: <FaSuitcaseRolling className="text-info" size={24} />,
    src: "./image/travel.png",
    alt: "Travel Itinerary Planner App",
    live: "https://travel-itinerary-planning-tool.vercel.app/",
    github: "https://github.com/RahulkrWD/Travel-Itinerary-Planning-Tool",
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
    icon: <FaChalkboardTeacher className="text-warning" size={24} />,
    src: "./image/home.png",
    alt: "Mentor Management & payment tracking system",
    live: "https://automation-payment.vercel.app",
    github: "https://github.com/RahulkrWD/Automation-payment",
    desc: "Automation-Payment is a web platform built with React (Vite) and Firebase to manage mentoring sessions, lecture schedules, and payments between admins and mentors. It features secure authentication, real-time updates, and separate dashboards for admins and mentors. Admins can add mentors, schedule lectures, and process payments, while mentors can track sessions, earnings, and update profiles. Key highlights include PDF receipt generation, responsive design, Framer Motion animations, and pagination for efficient data handling.",
    tech: ["React.js", "Firebase", "Bootstrap 5", "Framer Motion", "Redux Toolkit"]
  },
  {
    title: "Prescription and Medication Management Tool",
    icon: <FaMedkit className="text-danger" size={24} />,
    src: "./image/medication.png",
    alt: "Prescription Management Tool",
    live: "https://medication-management-tool.vercel.app/",
    github: "https://github.com/RahulkrWD/medication-management-tool",
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
    icon: <FaShoppingCart className="text-success" size={24} />,
    src: "./image/multi-vendor.png",
    alt: "E-commerce Platform",
    live: "https://multi-vendor-eta.vercel.app/index.html",
    github: "https://github.com/RahulkrWD/multi-vendor",
    desc: "This project is a multi-vendor e-commerce platform built with HTML, CSS, Bootstrap, and JavaScript for the frontend, and Firebase for real-time database and authentication. The application supports seller and buyer accounts, allowing vendors to create, edit, and delete (CRUD) product listings, while customers can browse products and add items to their cart.",
    tech: ["JavaScript", "Firebase", "Bootstrap"],
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const maxIndex = projects.length - 1;
  const sectionRef = useRef(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0); // Loop back to first
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex); // Loop to last
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section 
      id="projects" 
      className={styles.projectSection}
      ref={sectionRef}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <Container fluid className={styles.fullContainer}>
        {/* Section Header with Title on Left */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <h2 className={styles.sectionTitle}>My Projects</h2>
              <p className={styles.sectionSubtitle}>Things I've built so far</p>
              <div className={styles.titleUnderline}></div>
            </div>
            <div className={styles.projectCounter}>
              <span className={styles.currentNumber}>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalNumber}>{String(projects.length).padStart(2, '0')}</span>
             
            </div>
          </div>
        </div>

        <div className={styles.projectContainer}>
          {/* Navigation Buttons */}
          <div className={styles.navigationButtons}>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevSlide}
              disabled={isTransitioning}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextSlide}
              disabled={isTransitioning}
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Single Project Display */}
          <div className={styles.singleProjectContainer}>
            <div className={`${styles.projectCard} ${isTransitioning ? styles.transitioning : ''}`}>
              <div className={styles.projectImageSection}>
                <img 
                  src={currentProject.src} 
                  alt={currentProject.alt}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectIcon}>
                    {currentProject.icon}
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContentSection}>
                <h3 className={styles.projectTitle}>{currentProject.title}</h3>
                <p className={styles.projectDescription}>{currentProject.desc}</p>
                
                <div className={styles.techStackSection}>
                  <h4 className={styles.techStackTitle}>Tech Stack:</h4>
                  <div className={styles.techStack}>
                    {currentProject.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techItem}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.projectActions}>
                  <Link 
                    to={currentProject.live} 
                    className={styles.actionButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className={styles.actionIcon} />
                    Live Preview
                  </Link>
                  <Link 
                    to={currentProject.github} 
                    className={`${styles.actionButton} ${styles.codeButton}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className={styles.actionIcon} />
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </Container>
    </section>
  );
}

export default Projects;