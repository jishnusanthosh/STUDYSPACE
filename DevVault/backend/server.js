import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./Config/db.js";
import authRoutes from "./Routes/authRoutes.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendPath = path.join(__dirname, "../frontend");

connectDB();

app.use(cors());

app.use(express.json());


// Serve frontend files
app.use(express.static(frontendPath));


// API routes
app.use("/api", authRoutes);


// Login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(frontendPath, "pages", "login.html"));
});


// Register page
app.get("/register", (req, res) => {
    res.sendFile(path.join(frontendPath, "pages", "register.html"));
});


// Home page
app.get("/home", (req, res) => {
    res.sendFile(path.join(frontendPath, "pages", "home.html"));
});


// Root
app.get("/", (req, res) => {
    res.redirect("/login");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});