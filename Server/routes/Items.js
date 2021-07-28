const express= require("express");
let app = express.Router()


app.get("/",(req,res)=>{
    res.send("you can now view all items")
});

module.exports= app