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

const port = 3000 || process.env.PORT;



app.listen(port, ()=>{

    console.log(`listening on ${port}`);
});