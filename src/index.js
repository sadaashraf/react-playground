import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
})();
