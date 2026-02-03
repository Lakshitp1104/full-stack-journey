// Day 13 - MVC Structure

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
