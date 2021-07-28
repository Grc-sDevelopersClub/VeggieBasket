require('dotenv').config();
const express = require("express");
var app = express();
const home = require("./routes/home");
const item= require("./routes/Items");
const morgan = require("morgan");
app.use(morgan("combined"));

app.use("/", home);
app.use("/items",item);

app.listen(3000, (req, res) => {
  console.log("Server Started at port 3000");
});
