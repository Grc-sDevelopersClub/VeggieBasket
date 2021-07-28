const express= require("express");
let app = express.Router()

app.get("/",(req,res)=>{
    res.send("Welcome to your account")
});

module.exports= app