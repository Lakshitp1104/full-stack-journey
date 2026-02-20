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

// UPDATE USER
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE USER
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
