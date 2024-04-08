import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./sendMail.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));

app.post("/api", async (req, res) => {
  try {
    const {name,email,phoneNumber,message } = req.body;

    // Assuming EmailSender returns a promise
    await EmailSender({name,email,phoneNumber,message });

    res.json({ msg: `Your message sent successfully. ${name}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`server running${port}`);
});
