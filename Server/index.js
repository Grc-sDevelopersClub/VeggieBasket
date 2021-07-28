const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const SERVER=process.env.SERVER;
mongoose.connect('mongodb://'+SERVER+':27017/VeggieBasket', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB is now connected");// we're connected!
});

app.get("/", (req,res) => {
  res.send("Hey Veggie Finder");
});

app.listen(3000, (req, res) => {
  console.log("Server Started at port 3000");
});
