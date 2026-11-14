
const express = require("express");
const client = require("prom-client");

const app = express();

// Create Prometheus metrics registry
const register = new client.Registry();

// Collect default Node.js metrics
client.collectDefaultMetrics({ register });

// Main route
app.get("/", (req, res) => {
    res.send("Hello Vaibhav! CI/CD Pipeline test Welcome to DevOps Project 2.");
});

// Health check route
app.get("/health", (req, res) => {
    res.send("Application is healthy.");
});

// Prometheus metrics route
app.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});

module.exports = app;
