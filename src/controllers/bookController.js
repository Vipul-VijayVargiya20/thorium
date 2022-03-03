const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}
//question 5 additional
const ratings = async function (req, res) {
    let rating = await authorModel.find({ ratings: { $gt: 3.5 } })
    let match = []
    for (let i = 0; i < rating.length; i++)
        match.push(rating[i]._id)
    let newbooks = await bookModel.updateMany(
        { author_id: { $in: match } },
        { $inc: req.body },
        { $new: true }
    )
    let bookee = await bookModel.find({ author_id: { $in: match } })

    res.send({ data: bookee })
    }
    const hardCover = async function (req, res) {
         let publisherId = await publisherModel.find({ publisher_Name: { $in: ["Penguin", "HarperCollins"] } })
        
        let match = []
        for (let i = 0; i < publisherId.length; i++)
            match.push(publisherId[i]._id)
        let books = await bookModel.updateMany(
            { publisher_id: { $in: match } },
            { $set: req.body },
            { $new: true }
        )
        res.send({data: books})
    }
    
  


module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.ratings = ratings
module.exports.hardCover= hardCover

