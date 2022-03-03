const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
	author: {type: ObjectId, ref: "NewAuthor"},
	price: Number,
    ratings: Number,
	ishardcover: {type: Boolean,default: false},
	publisher: {type: ObjectId, ref: "NewPublisher"}
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
