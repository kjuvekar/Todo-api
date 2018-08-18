const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,db) => {
    if(err){
       return console.log('Unable to connect to the database!');
    }
    console.log('Connected to DB!');
    var dbo = db.db('TodoApp');
    // dbo.collection('Todos').deleteMany({completed: true}).then((res)=>{
    //     console.log(res);
    // });
    // dbo.collection('Users').deleteOne({age:22}).then((res)=>{
    //     console.log(res);
    // })    ;
    dbo.collection('Users').findOneAndDelete({age:22}).then((res)=>{
        console.log(res);
    });
    db.close();
});
