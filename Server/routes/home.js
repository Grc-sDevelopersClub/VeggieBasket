
const express = require("express");
var app = express.Router()



app.get("/", (req,res) => {
  res.send("Hey Veggie Finder");
});

module.exports = app