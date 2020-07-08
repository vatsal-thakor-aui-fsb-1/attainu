var express = require('express');
var path = require('path');
var app = express();



app.use('/web',require('./routes/web.js'))
app.use('/blog',require('./routes/blog.js'))

app.listen(8080,function(){
    console.log("working");
})
