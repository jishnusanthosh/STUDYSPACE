import mongoose from "mongoose";

const db = await mongoose
  .connect("mongodb://localhost:27017/project")
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default db;