const mongoose = require('mongoose');

const User = mongoose.model('users', {

    firstName: {

        type: String, 
        required: true
        minlength: 4,
        trim: true
    },

    LastName: {

        type: String, 
        required: true 
        minlength: 4,
        trim: true
    },

    isActive: {

        type: Number,
        default: 0
    },

    // ALL THE KEY: VALUE PAIRS ARE VALIDATORS
    // THEY CAN BE ANYTHING YOU WANT


});

module.exports = User;