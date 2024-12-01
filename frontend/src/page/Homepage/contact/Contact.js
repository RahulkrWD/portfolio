import React, { useState } from "react";
import styles from "./styles/Contact.module.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function Whatsapp(){
  const phoneNumber = "7320810579";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}`;

  return (
    <Link to={whatsappLink} className=" m-2 text-success" target="_blank">
      <i className="fa-brands  fs-4 fa-whatsapp"></i>
    </Link>
  );
};

export function Message() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function fetchMessage() {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/mail`, {
        name,
        email,
        message,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/send");
        sessionStorage.setItem("email", email);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Server problem");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.message_container}>
      <h5 className="m-2">Message</h5>

      <TextField
        className={`m-3 ${styles.TextField}`}
        id="standard-basic"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="standard"
      />

      <TextField
        className={`m-3 text-light ${styles.TextField}`}
        id="standard-basic"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="standard"
      />

      <TextField
        className={`m-3 ${styles.TextField}`}
        id="standard-multiline-static"
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variant="standard"
      />
      <center>
        <button
          onClick={fetchMessage}
          className={`text-bg-primary p-2 m-2 fw-bold ${styles.submitBtn}`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"} &#10004;
        </button>
      </center>

      <Toaster />
    </div>
  );
}




function Contact() {
  return (
      <div id="contact" className="main_container">
        <h2 className="contact_heading" >Contact Me</h2>
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
    
  );
}

export default Contact;
