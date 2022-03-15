const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogs = new mongoose.Schema( {
   title:{
   type:String,
    required:true
    },
    body:{
        type:String,
        required:true,
    },
    authorId: {
        type: ObjectId,
        ref: "Authors",
        required:true
    }, 
   
    tags:[String],
    category: {type:String, required:true}, //examples: [technology, entertainment, life style, food, fashion
    subcategory: [String], //examples[technology-[web development, mobile development, AI, ML etc
    isDeleted: {
        type:Boolean, 
        default: false
    },
    isPublished: {type:Boolean, default: false}

},{ timestamps: [ { createdAt: 'created_at' }, {updatedAt: 'updated_at' }, { deletedAt: 'deleted_at' },{ PublishedAt: 'published_at' } ]}
);

module.exports = mongoose.model('Blogs', blogs)