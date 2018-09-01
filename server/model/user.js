var mongoose = require('mongoose');
var user = mongoose.model('users',{
    name:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});
    // var newUser = new user({
    //     name:'Kalpesh  juvekar  ',
    //     email:'kalpeshjuvekar96@gmail.com'
    // })
    // newUser.save().then((res)=>{
    //     console.log(res);
    //     mongoose.connection.close();
    // }).catch((err)=>{
    //     console.log('Sorry problem occured!',err);
    //     mongoose.connection.close();
    // });
module.exports ={user};