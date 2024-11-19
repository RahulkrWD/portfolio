import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./styles/Message.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Message() {
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
        className={`m-3 ${styles.TextField}`}
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

export default Message;
