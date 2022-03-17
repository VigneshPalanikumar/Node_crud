const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    Password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Persons', PersonSchema);