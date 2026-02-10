/* eslint-disable no-undef */
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MONGODB Connection failed: `, error.message);
    process.exit(1)
  }
};

export default connectDB;

// mongoose.connection.on("connected", () => {
//     console.log("[EVENT]: Mongodb is connected")
// })

// mongoose.connection.on("error", () => {
//     console.error("[EVENT]: Mongodb connection error")
// })

// mongoose.connection.on("disconnected", () => {
//     console.error("[EVENT]: Mongodb disconnected")
// })