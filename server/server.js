var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongodbConfig'); 
var {user} = require('./model/user');
var {todo} = require('./model/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{
    var todonew = new todo({
        text : req.body.text,
        completed: req.body.completed
    });
    todonew.save().then((doc)=>{
        console.log(doc);
        res.send(doc);
    }).catch((err)=>{
        console.log(err);
        res.status(400).send(err);
    });
    console.log(req.body);
});

app.listen(3000,()=>{
    console.log('started on port 3000');
});