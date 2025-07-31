const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");
dotenv.config();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.Email,
    pass: process.env.Pass,
  },
});

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Test Route", success: true });
});
// nodemailer
app.post("/mail", async (req, res) => {
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
  try {
    await transporter.sendMail({
      from: process.env.Email,
      to: process.env.Email,
      subject: `New Contact ${name}`,
      text: `Sender Email: ${email}\n\n${message}`, // plain‑text body
    });
    res.status(200).json({ message: "Email send successfull" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Something went wrong", success: false, error });
  }
});

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and ${process.env.DEV_MODE}`);
});
