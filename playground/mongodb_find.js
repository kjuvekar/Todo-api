const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,db) => {
    if(err){
       return console.log('Unable to connect to the database!');
    }
    console.log('Connected to DB!');
    var dbo = db.db('TodoApp');
    
    // dbo.collection('Todos').find({completed: false}).count().then((count)=>{
    //     console.log('TODO: ',count);
    // },(err)=>{
    //     console.log('error!',err);
    // });

    dbo.collection('Users').find({age:22})
    .toArray().then((docs)=>{
        console.log('Todos: ');
        console.log(JSON.stringify(docs,undefined,2));
        console.log('Couunt: ',docs.length);
    })
    // .count().then((count)=>{
    //     console.log('Count is ',count);
    // },(err)=>{
    //     console.log('Error!',err);
    // })
    .catch(err=>{console.log(err);});    
    db.close();
});
