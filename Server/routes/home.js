
const express = require("express");
var app = express.Router()
const mongoose = require('mongoose');


const SERVER=process.env.SERVER;
mongoose.connect('mongodb://'+SERVER+':27017/VeggieBasket', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB is now connected");
});

app.get("/", (req,res) => {
  res.send("Hey Veggie Finder");
});

module.exports = app