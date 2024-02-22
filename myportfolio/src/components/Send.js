import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styleSheet/Message.module.css";

function Send() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("email");
    if (!token) {
      navigate("/");
    }

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
      sessionStorage.removeItem("email");
    }
  }, [count, navigate]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "60vh" }}
    >
      <center>
        <div className={`text-bg-success ${styles.sendIcons}`}>&#10004;</div>
        <p className={`p-2 fw-bold ${styles.text}`}>Message send {count}</p>
      </center>
    </div>
  );
}

export default Send;