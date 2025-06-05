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
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
    isLoading: false
  });

  function handleInput(e) {
    const {name, value} = e.target;
    setSendMessage(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const navigate = useNavigate();

  async function fetchMessage(e) {
    e.preventDefault(); // Prevent default form submission
    
    if (!sendMessage.name || !sendMessage.email || !sendMessage.message) {
      toast.error("Please fill all fields");
      return;
    }

    setSendMessage(prev => ({...prev, isLoading: true}));

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/mail`, {
        name: sendMessage.name,
        email: sendMessage.email,
        message: sendMessage.message
      });
      
      if (response.data.message) { // Changed from success to message check
        toast.success("Message sent successfully!");
        navigate("/send");
        sessionStorage.setItem("email", sendMessage.email);
      } else {
        toast.error("Failed to send message");
      }
    } catch (err) {
      toast.error("Server problem");
    } finally {
      setSendMessage(prev => ({...prev, isLoading: false}));
    }
  }

  return (
    <form onSubmit={fetchMessage} className={styles.messageContainer} data-aos="fade-left">
      <h3 className={styles.messageTitle}>Send me a message</h3>

      <div className={styles.formGroup}>
        <TextField
          fullWidth
          name="name" // Changed from id to name
          label="Your Name"
          value={sendMessage.name}
          onChange={handleInput}
          variant="outlined"
          className={styles.inputField}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <TextField
          fullWidth
          name="email" // Changed from id to name
          label="Your Email"
          type="email"
          value={sendMessage.email}
          onChange={handleInput}
          variant="outlined"
          className={styles.inputField}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <TextField
          fullWidth
          name="message" // Changed from id to name
          label="Your Message"
          multiline
          rows={4}
          value={sendMessage.message}
          onChange={handleInput}
          variant="outlined"
          className={styles.inputField}
          required
        />
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={sendMessage.isLoading}
      >
        {sendMessage.isLoading ? (
          "Sending..."
        ) : (
          <>
            Send Message <FaPaperPlane className={styles.sendIcon} />
          </>
        )}
      </button>

      <Toaster position="top-right" />
    </form>
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
