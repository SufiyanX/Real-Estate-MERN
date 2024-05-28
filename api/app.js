import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import testRoutes from "./routes/test.routes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.listen(8800, () => {
  console.log("Server is running...");
});

// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
