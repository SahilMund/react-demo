/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/mongoose.config.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import authMiddleware from "./middlwares/auth.middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// eslint-disable-next-line no-undef
const currentActiveEnv = process.argv[2].split("=")[1];

dotenv.config({
  path: `./envs/.env.${currentActiveEnv}`,
  quiet: true,
});

connectDB();

const app = express();
//TODO: need to whitelist the deployed endpoint
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}));

app.use(cookieParser());

app.use(express.json()); // app.use((req,res,next)=>{})
//route setup
app.use("/api/auth", authRoutes);
app.use("/api/user", authMiddleware, userRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `${currentActiveEnv.toUpperCase()} server is running on port: ${process.env.PORT}`,
  );
});
