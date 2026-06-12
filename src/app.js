import express from "express";
import urlRoutes from "./routes/url.routes.js";

const app = express();

// Middleware to read JSON data from request body
app.use(express.json());

// Routes
app.use("/", urlRoutes);

// Default route (optional)
app.get("/", (req, res) => {
    res.send("URL Shortener API is running...");
});

export default app;