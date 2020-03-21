
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.static ("public"));

app.get("/notes", function(req,res){

  res.sendFile(path.join(__dirname, ".public.notes.html"));
});

app.listen(PORT, function(){
    console.log ("listening on PORT " + PORT)
})

