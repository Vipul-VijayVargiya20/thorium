const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find()
    res.send({ msg: allBooks })
}

const bookList = async function (req, res) {
    let lists = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: lists })
}

const getBooksInYear = async function (req, res) {
    let strYear = req.query.year
    let numYear = parseInt(strYear)
    let bookSameYear = await BookModel.find({ year: numYear })
    res.send({ msg: bookSameYear })
}

const getParticularBooks = async function (req, res) {
    let particularBook = req.body
    let aParticularBook = await BookModel.find(particularBook)
    res.send({ msg: aParticularBook })
}

const getXINRBooks = async function (req, res) {
    let INRBooks = await BookModel.find({ INR : 500 || 100 || 200})
    res.send({ msg: INRBooks })
}

const getRandomBooks = async function (req, res) {
    let INRBooks = await BookModel.find({ $or: [ {inStock : true } , { pages:{$gt:500} } ]})
    res.send({ msg: INRBooks })
}

module.exports.getRandomBooks = getRandomBooks
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks