const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const router = express.Router();

// Check if E-mail is Valid or not
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const checkUserUniqueness = (field, value) => {
    return { error, isUnique } = User.findOne({[field]: value}).exec()
        .then(user => {
            let res = {};
            if (Boolean(user)) {
                res = { error: { [field]: "This " + field + " is not available" }, isUnique: false };
            } else {
                res = { error: { [field]: "" }, isUnique: true };
            }
            return res;
        })
        .catch(err => console.log(err))
}

router.post("/add",(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const password = req.body.password;

    const newUser= new User({
        name: name,
        password: password
    });
  

    newUser.save((err)=>{
        if(err){
            console.log(err);
        }else {
            res.send("User added successfully");
        }
    });
});

router.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;


    
});

module.exports = router