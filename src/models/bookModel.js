const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "bookName": {
        type: String,
        required: true
    },
    "authorName": {
        type: String,
        required: true
    },
    category: String,
    year: Number,
    INR: Number,
    pages: Number,
    inStock : Boolean
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
