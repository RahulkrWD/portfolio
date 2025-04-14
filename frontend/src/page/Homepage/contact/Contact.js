import React, { useState } from "react";
import styles from "./styles/Contact.module.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export function Whatsapp() {
  const phoneNumber = "7320810579";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      to={whatsappLink}
      className={styles.socialIcon}
      target="_blank"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </Link>
  );
}

export function Message() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function fetchMessage() {
    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

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
    <div className={styles.messageContainer} data-aos="fade-left">
      <h3 className={styles.messageTitle}>Send me a message</h3>

      <div className={styles.formGroup}>
        <TextField
          fullWidth
          id="name"
          label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          className={styles.inputField}
        />
      </div>

      <div className={styles.formGroup}>
        <TextField
          fullWidth
          id="email"
          label="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          className={styles.inputField}
        />
      </div>

      <div className={styles.formGroup}>
        <TextField
          fullWidth
          id="message"
          label="Your Message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          className={styles.inputField}
        />
      </div>

      <button
        onClick={fetchMessage}
        className={styles.submitBtn}
        disabled={isLoading}
      >
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            Send Message <FaPaperPlane className={styles.sendIcon} />
          </>
        )}
      </button>

      <Toaster position="top-right" />
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>I'd love to hear from you!</p>

        <div className={styles.contactGrid}>
          <div className={styles.socialContainer} data-aos="fade-right">
            <h3 className={styles.socialTitle}>Contact Information</h3>
            <p className={styles.socialDescription}>
              Feel free to reach out through any of these channels
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+91 7320810579</span>
              </div>

              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>rahulkmrgaya21@gmail.com</span>
              </div>
            </div>

            <div className={styles.socialIcons}>
              <Link
                target="_blank"
                to="https://github.com/RahulkrWD"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>

              <Link
                target="_blank"
                to="https://www.linkedin.com/in/rahulkmr07"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=100009696459444"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>

              <Whatsapp />
            </div>
          </div>

          <Message />
        </div>
      </div>
    </section>
  );
}

export default Contact;
