import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCode,
  FaEnvelope,
  FaBars,
  FaLaptopCode,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="logo-text">Portfolio</span>
        </Link>

        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"></li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                <FaUser className="nav-icon" /> About
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("skills")}
              >
                <FaLaptopCode className="nav-icon" /> Skills
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                <FaCode className="nav-icon" /> Projects
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("services")}
              >
                <FaClipboardCheck className="nav-icon" /> Services
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                <FaEnvelope className="nav-icon" /> Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
