import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/PageNotFound.module.css";

function PageNotFound() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      navigate("/homepage");
    }

    return () => clearInterval(countdown);
  }, [count, navigate]);

  return (
    <div className={styles.container}>
      <img
        className={styles.not_found}
        src="/image/pagenotFound.svg"
        alt="Page Not Found"
      />
      <h1 className={styles.not_found_heading}>Page Not Found</h1>
      <p className={styles.not_found_desc}>
        Redirecting to the homepage in {count} seconds...
      </p>
    </div>
  );
}

export default PageNotFound;
