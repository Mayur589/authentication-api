import express from "express";
import { JWTcheck } from "./middleware/JWTcheck.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

app.get("/protected", JWTcheck, (req, res) => {
  res.status(200).json({
    message: "You are logined successfully",
  });
});

const PORT = process.env.PORT;

console.log(process.env.AUTH0_DOMAIN);

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});

export default app;
