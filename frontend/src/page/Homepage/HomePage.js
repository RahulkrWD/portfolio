import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./contact/Contact";
import Certificate from "./Certificate";

function HomePage(){

  return (
    <div>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Services />
        <Contact />
    </div>
  );
};

export default HomePage;
