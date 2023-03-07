require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require("passport-local-mongoose");


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

// const secret = process.env.SECRET;
// userSchema.plugin(encrypt, {secret: secret , encryptedFields: ["password"]})

const User = new mongoose.model("User", userSchema);


app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.post("/register", function(req, res){

  bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
    const newUser = new User({
      email: req.body.username,
      password : hash
    });
  
    newUser
      .save()
        .then( function(){
          res.render("secrets");
        })
        .catch( function(err){
          console.log(err);
        });
  });
  
});

app.post("/login", function(req , res){
  const username = req.body.username;
  const password = req.body.password;


  User.findOne({email: username})
    .then( function(foundUser){
      bcrypt.compare(password, foundUser.password , function(err, result) {
        if( result === true){
          res.render("secrets");
        }
    });
      
    })
    .catch( function(err){
      console.log(err);
    })
});





app.listen(3000, function() {
    console.log("Server started on http://localhost:3000");
  });