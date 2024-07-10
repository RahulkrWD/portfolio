import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import styles from "./styles/Homepage.module.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./contact/Contact";
import Certificate from "./Certificate";

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.animatedSection}>
      {children}
    </div>
  );
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#000";
  }, [isDarkMode]);

  return (
    <>
      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: ${isVisible ? "block" : "none"};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          font-size: 16px;
          border: none;
          cursor: pointer;
          outline: none;
          z-index: 1000;
        }
      `}</style>

      <i
        onClick={toggleTheme}
        className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"} ${
          styles.toggle_theme
        }`}
      ></i>

      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Certificate />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </>
  );
};

export default HomePage;
