// Day 09 - Express Routing

const express = require("express");
const app = express();
const PORT = 3000;

// Basic routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// Route parameter
app.get("/user/:name", (req, res) => {
  const userName = req.params.name;
  res.send("Hello " + userName);
});

// Query parameter
app.get("/search", (req, res) => {
  const keyword = req.query.q;
  res.send("You searched for: " + keyword);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
