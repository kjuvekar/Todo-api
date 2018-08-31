const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

// var Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required:true,
//         minlength:1,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     completedAt:{
//         type:Date,
//         default:null
//     }
// });
//      var todo = new Todo({
//         text:'Cook rice',
//         completed:false
//      })
//     todo.save()
//         .then((res)=>{
//             console.log(res);
//             mongoose.connection.close();
//         }).catch((err)=>{
//             console.log('Error!',err);
//             mongoose.connection.close();
//         });

var user = mongoose.model('users',{
    name:{
        type:string,
        required:true,
        minlength:1,
        trim:true
    },
    email:{
        type:string,
        required:true,
        trim:true,
        minlength:1
    }
});
    var newUser = new user({
        name:'Kalpesh  juvekar  ',
        email:'kalpeshjuvekar96@gmail.com'
    })
    newUser.save().thrn((res)=>{
        console.log(res);
        mongoose.connection.close();
    }).catch((err)=>{
        console.log('Sorry problem occured!',err);
        mongoose.connection.close();
    });