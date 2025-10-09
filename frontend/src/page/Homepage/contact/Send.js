import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Send.module.css";

function Send() {
  const [count, setCount] = useState(5);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = sessionStorage.getItem("email");
    if (!userEmail) {
      navigate("/homepage");
    } else {
      setEmail(userEmail);
    }

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    if (count === 0) {
      navigate("/homepage");
      sessionStorage.removeItem("email");
    }
  }, [count, navigate]);

  const handleGoHome = () => {
    navigate("/homepage");
    sessionStorage.removeItem("email");
  };

  return (
    <div className={styles.successContainer}>
      <div className={styles.successCard}>
        <div className={styles.iconContainer}>
          <div className={styles.checkIcon}>
            <svg viewBox="0 0 24 24" className={styles.checkSvg}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <div className={styles.ripple}></div>
          <div className={styles.ripple2}></div>
        </div>
        
        <h1 className={styles.successTitle}>Message Sent Successfully!</h1>
        <p className={styles.successMessage}>
          Thank you for reaching out! Your message has been delivered to <strong>{email}</strong>.
          I'll get back to you as soon as possible.
        </p>
        
        <div className={styles.countdownContainer}>
          <div className={styles.countdownCircle}>
            <span className={styles.countdownNumber}>{count}</span>
          </div>
          <p className={styles.countdownText}>
            Redirecting to homepage in {count} second{count !== 1 ? 's' : ''}
          </p>
        </div>
        
        <button onClick={handleGoHome} className={styles.homeButton}>
          <svg className={styles.homeIcon} viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          Go to Homepage
        </button>
      </div>
      
      <div className={styles.backgroundAnimation}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
    </div>
  );
}

export default Send;
