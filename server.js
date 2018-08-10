var express = require('express');
var app = express();
var end_logado = "./logado.html";
var volta = "./index.html";
var existe = "./existe.html"
var usr_ja_existe = "./jaexiste.html";
var database = {};

app.listen(8080);
console.log("server running!");

var bp = require('body-parser');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.post("/login", async (req, res) => {
  let data = req.body;
  let user = data.username;
  let pass = data.password;

  if(database.hasOwnProperty(user) && database[user] == pass){
    res.json({status : 1});
  }
  else{
    res.json({status : 0});
  }
})

app.post('/register', async (req, res) =>{
  let data = req.body;
  let user = data.username;
  let pass = data.password;

  if(database.hasOwnProperty(user)){
    res.json({status : 0});
  }
  else{
    database[user] = pass;
    res.json({status : 1});
  } 
})