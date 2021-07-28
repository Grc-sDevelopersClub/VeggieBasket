const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("Hey Veggie Finder");
});

app.listen(3000, (req, res) => {
  console.log("Server Started at port 3000");
});
