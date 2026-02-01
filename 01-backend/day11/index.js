// Day 11 - Middleware in Express

const express = require("express");
const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Custom middleware
function logger(req, res, next) {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next(); // VERY IMPORTANT
}

// Use custom middleware
app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.send("Middleware Demo");
});

app.post("/data", (req, res) => {
  res.json({
    message: "Data received",
    body: req.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
