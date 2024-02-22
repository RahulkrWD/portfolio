const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db");
const userModel = require("./user");
const cors = require("cors");
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send({ message: "Hello world" });
});

app.post("/message", async function (req, res) {
  const { username, email, message } = req.body;
  if (!username) {
    return res.send({ message: "Name is Required" });
  }
  if (!email) {
    return res.send({ message: "Email is Required" });
  }
  if (!message) {
    return res.send({ message: "Message is required" });
  }
  try {
    const sendMessage = await userModel.create({ username, email, message });
    res.send({
      success: true,
      message: "Send message successfully",
      sendMessage,
    });
  } catch (err) {
    res.send({ success: false, message: "Message send Failed" });
  }
});

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and ${process.env.DEV_MODE}`);
});
