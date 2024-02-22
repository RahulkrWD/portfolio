import React from "react";
import Contact from "../components/Contact";
import Footer from "./Footer";
import ReactTab from "./ReactTab";
import Header from "./Header";

function HomePage() {
  return (
    <div style={{ backgroundColor: " #e5ddd5" }}>
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
