import express from "express";
import userRoutes from "./routes/userRoute.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});