var express = require("express");
var app = express();
var path = require('path');
app.use(express.static('public'));

app.listen(8080,function(){
    console.log("working");
})

app.get('/',function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})
app.get('/team',function(req,res){
    res.sendFile(__dirname + "/public/team.html")
})
app.get('/contact-us',function(req,res){
    res.sendFile(__dirname + "/public/contact-us.html")
})

app.post('/contact-us',(req,res)=>{
    res.send('<h1>Thank you</h1>');
})