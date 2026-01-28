// Day 10 - POST Requests & Body Parsing

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// GET route
app.get("/", (req, res) => {
  res.send("POST Request Demo");
});

// POST route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required"
    });
  }

  res.json({
    message: "Login successful",
    user: username
  });
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
