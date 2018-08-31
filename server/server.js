const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

var Todo = mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Date,
        default:Date.now()
    }
});

// var newTodo = new Todo({
//     text:'Cook it!'
// });
     var todonew = new Todo({
        text:'new todo task2',
        completed:true
     })
// newTodo.save()
//     .then((res)=>{
//     console.log(res);})
//     .catch((err=>{
//     console.log(err);}))
todonew.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log('Error!',err);
});

// db.close();
mongoose.connection.close();