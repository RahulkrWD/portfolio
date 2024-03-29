import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "../styleSheet/Message.module.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Message() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function fetchMessage() {
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
      toast.error("server problem", err);
    }
  }
  return (
    <>
      <TextField
        className={`m-3 ${styles.TextField}`}
        id="outlined-basic"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <TextField
        className={`m-3 ${styles.TextField}`}
        id="outlined-number-input"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <TextField
        className={`m-3 ${styles.TextField}`}
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={fetchMessage}
        className={`text-bg-primary p-2 m-2 fw-bold ${styles.submitBtn}`}
      >
        Send &#10004;
      </button>
      <Toaster />
    </>
  );
}

export default Message;
