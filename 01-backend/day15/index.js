// Day 15 - MongoDB Connection using Mongoose

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());

// 🔴 Replace with your real connection string
const MONGO_URI = "YOUR_MONGODB_CONNECTION_STRING";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
  });

app.get("/", (req, res) => {
  res.send("MongoDB Connection Successful");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
