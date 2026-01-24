// Day 03 - File System Module

const fs = require("fs");

// READ FILE
fs.readFile("read.txt", "utf8", function (err, data) {
  if (err) {
    console.log("Error reading file");
    return;
  }
  console.log("File Content:");
  console.log(data);
});

// WRITE FILE
const message = "This file was written using Node.js fs module.";

fs.writeFile("write.txt", message, function (err) {
  if (err) {
    console.log("Error writing file");
    return;
  }
  console.log("Data written to write.txt successfully");
});
