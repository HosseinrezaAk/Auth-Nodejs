const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.listen(3000, function() {
    console.log("Server started on http://localhost:3000");
  });