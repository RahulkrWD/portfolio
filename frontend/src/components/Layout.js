import React, { useState } from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [circles, setCircles] = useState([]);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    createCircle(x, y);
  };

  const createCircle = (x, y) => {
    const circle = {
      id: Date.now(),
      x,
      y,
      color: getRandomColor(),
    };
    setCircles((prevCircles) => [...prevCircles, circle]);

    setTimeout(() => {
      removeCircle(circle.id);
    }, 1000);
  };

  const removeCircle = (id) => {
    setCircles((prevCircles) =>
      prevCircles.filter((circle) => circle.id !== id)
    );
  };

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      {circles.map((circle, index) => (
        <div
          key={index}
          className={styles.circle}
          style={{
            left: circle.x,
            top: circle.y,
            backgroundColor: circle.color,
          }}
        ></div>
      ))}
      {children}
    </div>
  );
}

export default Layout;
