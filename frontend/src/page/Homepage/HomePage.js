import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setScroll(true);
      } else {
        setScroll(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificate />
      <Services />
      <Contact />
      {Scroll && <ScrollButton />} 
    </div>
  );
}

export default HomePage;
