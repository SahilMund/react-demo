/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/mongoose.config.js";
import authRoutes from "./routes/auth.route.js";

// eslint-disable-next-line no-undef
const currentActiveEnv = process.argv[2].split("=")[1];

dotenv.config({
  path: `./envs/.env.${currentActiveEnv}`,
  quiet: true
});

connectDB();

const app = express();

app.use(express.json())

//route setup
app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => {
  console.log("server is running on port: " + process.env.PORT);
});

