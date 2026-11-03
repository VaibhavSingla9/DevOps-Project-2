const express = require("express");

const app = express();

const PORT = 3000;

// Main route
app.get("/", (req, res) => {
    res.send("Hello Vaibhav! Welcome to DevOps Project 2.");
});

// Health check route
app.get("/health", (req, res) => {
    res.send("Application is healthy.");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});