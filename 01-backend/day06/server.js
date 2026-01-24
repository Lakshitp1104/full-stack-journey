// Day 06 - Request & Response with basic routing

const http = require("http");

const server = http.createServer(function (req, res) {
  // Get requested URL
  const url = req.url;

  res.writeHead(200, { "Content-Type": "text/plain" });

  if (url === "/") {
    res.end("Home Page");
  } else if (url === "/about") {
    res.end("About Page");
  } else if (url === "/contact") {
    res.end("Contact Page");
  } else {
    res.end("404 Page Not Found");
  }
});

const PORT = 3000;

server.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});
