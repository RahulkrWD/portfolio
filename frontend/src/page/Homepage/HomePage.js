import React, { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./contact/Contact";
import ScrollButton from "../../components/ScrollButton";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const [Scroll, setScroll] = useState(false);

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 120,
      delay: 100,
    });
  }, []);

  // Handle scroll for scroll-to-top button
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

  return (
    <>
      <Header />

      <div id="about">
        <About data-aos="fade-up" data-aos-delay="100" />
      </div>

      <div id="skills">
        <Skills data-aos="fade-up" data-aos-delay="150" />
      </div>

      <div id="projects">
        <Projects data-aos="fade-up" data-aos-delay="200" />
      </div>

      <div id="contact">
        <Contact data-aos="fade-up" data-aos-delay="250" />
      </div>

      <Services data-aos="fade-up" data-aos-delay="250" />

      <Contact data-aos="fade-up" data-aos-delay="300" />

      {Scroll && <ScrollButton />}
    </>
  );
}

export default HomePage;
