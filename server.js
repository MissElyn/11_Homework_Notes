
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

const bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

require("./public/htmlRouts")(app);

app.use(express.static ("public"));

app.get("/notes", function(req,res){

  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen(PORT, function(){
    console.log ("listening on PORT " + PORT)
})

