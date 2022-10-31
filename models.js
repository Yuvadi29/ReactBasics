const mongoose = require('mongoose');

//Something like the reqirements in the database for the Users
const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('notes', NotesSchema);