// Day 16 - Schema & Model

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const PORT = 3000;

app.use(express.json());

// 🔴 Replace with your MongoDB connection string
mongoose.connect("mongodb+srv://lakshit:Lakshit123@cluster0.5p7kxbf.mongodb.net/test")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Connection Error:", err));


// Create user (POST)
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all users (GET)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
