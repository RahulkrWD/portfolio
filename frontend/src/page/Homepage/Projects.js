import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaShoppingCart,
  FaMedkit,
  FaSuitcaseRolling,
  FaBuilding,
  FaChalkboardTeacher,
  FaGithub
} from "react-icons/fa";
import { Modal } from "react-bootstrap";
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
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardHover = (project) => {
       setSelectedProject(project);
      setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="container py-5">
      <div className="text-center mb-5 animate__animated animate__fadeIn">
        <h2 className="fw-bold display-5">My Projects</h2>
        <p className="lead text-muted">Things I've built so far</p>
        <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
      </div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="col-md-6 col-lg-4 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className="card h-100 shadow-sm border-0 overflow-hidden project-card"
              onClick={() => handleCardHover(project)}
            >
              <div className="card-img-top overflow-hidden" style={{ height: '200px' }}>
                <img 
                  src={project.src} 
                  alt={project.alt}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  {project.icon}
                  <h5 className="card-title mb-0 ms-2">{project.title}</h5>
                </div>
                <div className="mt-auto d-flex justify-content-between">
                  <Link 
                    to={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="me-1" /> Live Demo
                  </Link>

                  <Link 
                    to={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="me-1" /> GitHub
                  </Link>
                </div>
              </div>
              <div className="card-footer bg-transparent">
                <div className="d-flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="badge bg-light text-dark">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="badge bg-light text-dark">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="md" centered>
        <Modal.Header className="border-0">
          <Modal.Title className="d-flex align-items-center">
            {selectedProject?.icon}
            <span className="ms-2 text-dark fs-5">{selectedProject?.title}</span>
          </Modal.Title>
          <button 
            type="button" 
            className="btn-close" 
            onClick={handleCloseModal}
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div>
               <div className="text-secondary">
              <img 
                src={selectedProject?.src} 
                alt={selectedProject?.alt}
                className="img-fluid rounded"
              />
            </div>
           
              <p className={`mb-2 text-secondary ${styles.model_desc}`}>{selectedProject?.desc}</p>
              
              <h6 className="fw-bold mb-2 text-dark">Technologies Used:</h6>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {selectedProject?.tech.map((tech, i) => (
                  <span key={i} className="badge bg-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="d-flex justify-content-between">
<Link 
              to={selectedProject?.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <FaExternalLinkAlt className="me-2" /> Visit Live Demo
              </Link>
              <Link 
              to={selectedProject?.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-secondary btn-sm"
              >
                <FaGithub className="me-2" /> GitHub
              </Link>
              </div>
              
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Projects;