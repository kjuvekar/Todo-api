var mongoose = require('mongoose');
var todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Date,
        default:null
    }
});
    //  var todo = new Todo({
    //     text:'Cook rice',
    //     completed:false
    //  })
    // todo.save()
    //     .then((res)=>{
    //         console.log(res);
    //         mongoose.connection.close();
    //     }).catch((err)=>{
    //         console.log('Error!',err);
    //         mongoose.connection.close();
    //     });

module.exports = {todo};