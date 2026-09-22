
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/home", (req, res) => {
  res.send("Welcome");
});

app.put("/services",(req,res)=>{
     res.send("data added");
})

app.delete("/about",(req,res)=>{
     res.send("data deleted");
})
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
``