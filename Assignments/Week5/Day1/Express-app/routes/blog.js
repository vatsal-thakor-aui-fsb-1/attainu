var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../','./public/blog.html'))
})
router.get('/authors',function(req,res){
    res.sendFile(path.join(__dirname, '../','./public/authors.html'))
})
router.get('/:blog_name',function(req,res){  // dynamic route base on page names
    res.send('<h1>' + req.params.blog_name + '</h1>')
})
module.exports = router;