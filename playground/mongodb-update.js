const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,db) => {
    if(err){
       return console.log('Unable to connect to the database!');
    }
    console.log('Connected to DB!');
    var dbo = db.db('TodoApp');
    // 
    dbo.collection('Users').findOneAndUpdate({name:'vaibhav'},{
        $set:{ name:'jocobs vala vaibhav' },
        $inc:{
            age:+1
        }
        },{
            returnOriginal:false
        }).then((res)=>{
            console.log(res);
        });
    db.close();
});