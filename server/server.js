var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongodbConfig'); 
var {user} = require('./model/user');
var {todo} = require('./model/todo');

