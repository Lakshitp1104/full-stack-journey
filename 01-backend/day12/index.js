// Day 12 - REST API (CRUD without Database)

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data (acts like a database)
let users = [
  { id: 1, name: "Lakshit" },
  { id: 2, name: "Rahul" }
];

// GET - fetch all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST - add new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - update user
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  res.json(user);
});

// DELETE - remove user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter(u => u.id !== userId);
  res.json({ message: "User deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
