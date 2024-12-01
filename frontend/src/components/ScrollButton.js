import React from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        fontSize: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollButton;
