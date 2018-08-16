const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,db) => {
    if(err){
       return console.log('Unable to connect to the database!');
    }
    console.log('Connected to DB!');
    var dbo = db.db('TodoApp');
    // dbo.collection('Todos').insertOne({
    //     text:'Something to do 2!',
    //     completed: false
    // },(err , result )=>{
    //     if(err){
    //         return console.log('Error while inserting data in Database!');
    //     }
    //     console.log('Success!',JSON.stringify(result.ops,undefined,2));
    // });

    // dbo.collection('Users').insertOne({
    //         name:'Aniket',
    //         age:22,
    //         location:'Mumbai'
    //     },(err,result)=>{
    //         if(err){
    //             return console.log('Some problem occured',err);
    //         }
    //         console.log('Success!',JSON.stringify(result.ops,undefined,2));
    //         console.log(result.ops[0]._id.getTimestamp());
    //     });
    db.close();
});
