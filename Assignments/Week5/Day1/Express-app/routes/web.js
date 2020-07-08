var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../','./public/home.html'))
})
router.get('/messages',function(req,res){
    res.sendFile(path.join(__dirname, '../','./public/messages.html'))
})
router.get('/settings',function(req,res){
    res.sendFile(path.join(__dirname, '../','./public/settings.html'))
})
module.exports = router;