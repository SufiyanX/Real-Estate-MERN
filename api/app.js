import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server is running...");
});

// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
