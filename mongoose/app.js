const mongoose = require('mongoose');
const User = require('./models/User.js');

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', ()=>console.log('Connected'))
    .on('error', (err)=>{
        
        console.log('Failed to Connect');
});

