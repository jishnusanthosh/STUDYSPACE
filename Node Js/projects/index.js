import express from "express";
import studentRoutes from "./routes/student.js";

const app = express();

app.use(express.json());

app.use("/student", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});