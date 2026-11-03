const express = require("express");

const app = express();

// Main route
app.get("/", (req, res) => {
    res.send("Hello Vaibhav! Welcome to DevOps Project 2.");
});

// Health check route
app.get("/health", (req, res) => {
    res.send("Application is healthy.");
});

module.exports = app;