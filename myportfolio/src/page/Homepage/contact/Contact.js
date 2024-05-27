import React from "react";
import styles from "./styles/Contact.module.css";
import { Link } from "react-router-dom";
import Message from "./Message";
import Whatsapp from "./Whatsapp";
import Layout from "../../../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <h5 className="text-center text-bg-secondary p-1 mt-3">Contact Me</h5>

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
              className="m-2 text-dark fs-4"
              to={"https://github.com/RahulkrWD"}
            >
              <i className="fa-brands fa-square-github"></i>
            </Link>
            <Link
              target="_blank"
              className="m-2 fs-4"
              to={"https://www.linkedin.com/in/rahulkmr07"}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              target="_blank"
              className="m-2 fs-4"
              to={"https://www.facebook.com/profile.php?id=100009696459444"}
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link
              target="_blank"
              className="m-2 text-danger fs-4"
              to={`https://www.instagram.com/r_kr07_14/`}
            >
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
            <Whatsapp />
          </div>
          <Message />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
