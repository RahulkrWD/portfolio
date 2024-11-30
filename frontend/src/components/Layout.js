import React, { useState, useRef } from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [circles, setCircles] = useState([]);
  const idCounter = useRef(0); 

  const handleMouseMove = (e) => {
    const x = e.clientX + window.scrollX; 
    const y = e.clientY + window.scrollY; 
    createCircle(x, y);
  };

  const createCircle = (x, y) => {
    idCounter.current += 1; 
    const circle = {
      id: idCounter.current,
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
      {circles.map((circle) => (
        <div
          key={circle.id} 
          className={styles.circle}
          style={{
            left: `${circle.x}px`, 
            top: `${circle.y}px`, 
            backgroundColor: circle.color,
          }}
        ></div>
      ))}
      {children}
    </div>
  );
}
export default Layout;
