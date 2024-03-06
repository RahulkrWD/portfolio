import React, { useState } from "react";
import Contact from "../components/Contact";
import Footer from "./Footer";
import ReactTab from "./ReactTab";
import Header from "./Header";

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleMode() {
    setDarkMode(!darkMode);
  }

  const themeStyles = {
    backgroundColor: darkMode ? "#1e1e1e" : "#e5ddd5",
    color: darkMode ? "#fff" : "#000",
  };

  return (
    <div style={themeStyles}>
      <div
        className="p-3"
        style={{ float: "right", marginRight: "10px", cursor: "pointer" }}
      >
        <i
          onClick={toggleMode}
          className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}
        ></i>
      </div>

      <Header />
      <ReactTab />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
}

export default HomePage;
