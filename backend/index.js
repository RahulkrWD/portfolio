const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send({ message: "Hello world" });
});

// nodemailer
app.post("/mail", function (req, res) {
  const { name, email, message } = req.body;
  if (!name) {
    return res.send({ success: false, message: "Name is required" });
  }
  if (!email) {
    return res.send({ success: false, message: "Email is required" });
  }
  if (!message) {
    return res.send({ success: false, message: "Message is required" });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Pass,
    },
  });
  const mailOptions = {
    from: process.env.Email,
    to: process.env.Email,
    subject: `New Contact ${name}`,
    text: `Sender Email: ${email}\n\n${message}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Email not sent",
        error: err.message,
      });
    }
    res.send({ success: true, message: "Email sent", info });
  });
});

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and ${process.env.DEV_MODE}`);
});
