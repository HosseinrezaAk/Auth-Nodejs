const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
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

  const newUser = new User({
    email: req.body.username,
    password : req.body.password
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

app.post("/login", function(req , res){
  const username = req.body.username;
  const password = req.body.password;


  User.findOne({email: username})
    .then( function(foundUser){
      if(foundUser.password === password){
        res.render("secrets");
      }
    })
    .catch( function(err){
      console.log(err);
    })
});





app.listen(3000, function() {
    console.log("Server started on http://localhost:3000");
  });