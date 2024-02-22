import React from "react";
import styles from "../styleSheet/Contact.module.css";
import { Link } from "react-router-dom";
import Message from "./Message";

function Contact() {
  return (
    <>
      <div className="container">
        <center>
          <h5 className={`fw-bold ${styles.heading}`}>Contact Me</h5>
        </center>
        <div className={styles.contact}>
          <div className={styles.socialMedia}>
            <p>Touch on social media</p>
            <hr />
            <h6>
              <i className="fa-solid fa-phone text-primary"></i> +91 7320810579
            </h6>
            <h6>
              <i className="fa-solid fa-envelope text-danger"></i>{" "}
              rahulkmrgaya21@gmail.com
            </h6>
            <Link
              target="_blank"
              className="m-2 text-dark fs-2"
              to={"https://github.com/RahulkrWD"}
            >
              <i className="fa-brands fa-square-github"></i>
            </Link>
            <Link
              target="_blank"
              className="m-2 fs-2"
              to={"https://linkedin.com/in/rahul-kumar-6774a4259"}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              target="_blank"
              className="m-2 fs-2"
              to={"https://www.facebook.com/profile.php?id=100009696459444"}
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link
              target="_blank"
              className="m-2 text-danger fs-2"
              to={`https://www.instagram.com/r_kr07_14/`}
            >
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
          </div>
          <div className={styles.message}>
            <Message />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
