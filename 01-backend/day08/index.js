// Day 08 - First Express Server

const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", function (req, res) {
  res.send("Welcome to Express Server");
});

// About route
app.get("/about", function (req, res) {
  res.send("This is About Page");
});

// Start server
app.listen(PORT, function () {
  console.log("Express server running on port " + PORT);
});
