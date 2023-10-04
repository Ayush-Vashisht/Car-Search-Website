const express = require("express");
const Car = require("./models/cars");
const cors = require("cors");
const fs=require('fs');


const app = express();
app.use(express.json()); 

app.use(
  cors({
    credentials: true,
    origin:"http://127.0.0.1:5173",
  })
);
app.get("/test", (req, res) => {
  res.json("test ok");
});
app.get("/", async (req, res) => {
  const data = Car;
  res.json(data);
});

app.listen(4000, console.log("Server is running on port 5000"));
