const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
app.use(express.json())
app.use(express.urlencoded());

const url='mongodb://localhost:27017';
const dbname='cart';
let db;
MongoClient.connect(url,(err,client)=>{
    assert.equal(null,err)
    console.log("Mongodb Connected");
    db=client.db(dbname)
});//define Mongodb

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/new',(req,res)=>{
    let {recipe_title,recipe_description,serve_for,cooking_time}=req.body; //obtain form values
    console.log(req.body);
    const collection=db.collection('documents');
    collection.insertOne({recipe_title,recipe_description,serve_for,cooking_time},(err,result)=>{
        if(err){
            console.log(err)
            res.json({success: false, message: "Error encountered"})
        }
        else{
            res.json({success: true, message: "Recipie added"})
        }
    })
})

app.listen(3010,()=>console.log("Started"))