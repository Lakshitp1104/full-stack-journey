// Day 05 - First HTTP Server using Node.js

const http = require("http");

// Create server
const server = http.createServer(function (req, res) {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end("Hello from Node.js Server");
});

// Port number
const PORT = 3000;

// Start server
server.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
