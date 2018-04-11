const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', (err, client)=>{

    if(err) throw err;

    console.log('Connected');

    const db = client.db('animals');

    //Creating Data

    db.collection('mammals').insertOne({

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
    } , {

        $set: {name: 'updated'}
    }

);


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