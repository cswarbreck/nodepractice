const mongoose = require('mongoose');
const User = require('./models/User.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', ()=>console.log('Connected'))
    .on('error', (err)=>{
        
        console.log('Failed to Connect');
});

app.get('/', (req, res)=>{

    res.send('<h1>Hello, little enemy...</h1>')
});

app.post('/users', (req, res)=>{

    const newUser = new User({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isActive: req.body.isActive
    });

    newUser.save().then(savedUser =>{

        console.log('User Saved. TTYL BBZ xoxo');
    }).catch(err=>{

        res.status(404).send('User error Muthafucka');
    });

});

app.get('/users', (req, res)=>{

    User.find({}).then(users=>{

        res.send(users);
    });
});

app.patch('/users/:id', (req, res)=>{

    const id = req.params.id;

    const firstName = req.body.firstName;

    User.findByIdAndUpdate(id, {$set: {firstName: firstName }}, {new: true})
    .then(savedUser=>{

        res.send('User saved by patch');

        console.log('First Name Updated - Mug')
    });

});

//  new: true gives the new updated object
// Using PATCH, one can update only part of the data
// If you use POST, you can overwrite the entire object:

app.put('/users/:id', (req, res)=>{

    User.findOne({_id: req.params.id}).then(user=>{
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;

        user.save().then(userSaved=>{
            res.send(userSaved);
        }).catch(err=>{console.log(err)});
    });
});

app.delete('/users/:id', (req, res)=>{

    User.remove({_id: req.params.id}).then(userRemoved=>{

        res.send(`User ${userRemoved.firstName} removed`);
    });
});




const port = 3000 || process.env.PORT;

app.listen(port, ()=>{

    console.log(`listening on ${port}`);
});