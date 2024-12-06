import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./contact/Contact";
import Certificate from "./Certificate";
import ScrollButton from "../../components/ScrollButton";

function HomePage() {
  const [Scroll, setScroll] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the element is visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
        <Header />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
        <About />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
        <Skills />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[3] = el)}>
        <Projects />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[4] = el)}>
        <Certificate />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[5] = el)}>
        <Services />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[6] = el)}>
        <Contact />
      </div>
      {Scroll && <ScrollButton />}
    </div>
  );
}

export default HomePage;
