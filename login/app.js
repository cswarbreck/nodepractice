const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', (err, client)=>{

    if(err) throw err;

    console.log('Connected');

    const db = client.db('animals');

    const object = new ObjectID();

    //Creating Data

/*     db.collection('mammals').insertOne({

        name: 'horse',
        legs: '4',
        mantra: '4 legs good, 2 legs baaaad'
    }, (err, result)=>{

        if(err) return console.log(err);

        console.log('Inserted');
    });

    //Reading Data

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err
    
        console.log(result)
      });


    //Updating Data

    db.collection('mammals').findOneAndUpdate({

        __id: new ObjectId("5ace3714ce64ed3ad8c91508")
   
    }, 

        {$set: {name: 'updated'}}

    ).then(result =>{

        console.log('result');

    }).catch(err =>{

        console.log('err - content not updated');
    }); */

//The above 'then()' and 'catch()' statement is known as a promise

//DELETING DATA:

/* db.collection('mammals').deleteMany({name: 'Edwin Diaz'});

db.collection('mammals').deleteOne({name: 'Edwin Diaz'});

db.collection('mammals').deleteAndFind({name: 'Edwin Diaz'}); */

db.collection('mammals').findOneAndDelete({

    id: new ObjectId("5ace3714ce64ed3ad8c91508")
}).then(result =>{

    console.log(result)
});

});










//const MongoClient = require('mongodb').MongoClient

//MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
  //  if (err) throw err;

    //console.log('Connected');

    // db.collection('mammals').find().toArray(function (err, result) {
    //  if (err) throw err;

    //   console.log(result)
    //  });
//});