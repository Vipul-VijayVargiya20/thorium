const BlogsModel = require("../model/blogsModel")
const AuthorModel = require("../model/authorModel")

const createBlogs = async function(req, res) {
try {
let data = req.body;
let author = data.authorId;
let validAuthor = await AuthorModel.find({ _id: author })
if (!validAuthor) {
return res.status(400).send({ status: "false", msg: "Enter a valid author" })
}
let savedData = await BlogsModel.create(data);
return res.status(201).send(savedData)
} catch (error) {
return res.status(500).send({ msg: "Error", error: error.message })
}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const getBlogs = async function(req, res) {
try {
let filter = req.query;
// console.log(filter)
let data = await BlogsModel.find({ $and: [filter, { isPublished: true }, { isDeleted: false }] })
if (data.length === 0) {
return res.status(404).send({ status: false, msg: "No data found" })
}
if (filter.tags == undefined && filter.subcategory == undefined) {
let blogs = await BlogsModel.find({ $and: [filter, { isDeleted: false }, { isPublished: true }] }).populate("authorId")
return res.status(200).send({ data: blogs })
}
if (filter.tags != undefined && filter.subcategory == undefined) {
let tags = filter.tags
delete filter.tags;
let blogs = await BlogsModel.find({ $and: [{ tags: { $in: [tags] } }, filter, { isDeleted: false }, { isPublished: true }] }).populate("authorId")
return res.status(200).send({ data: blogs })
}
if (filter.tags == undefined && filter.subcategory != undefined) {
let subCat = filter.subcategory
delete filter.subcategory;
let blogs = await BlogsModel.find({ $and: [{ subcategory: { $in: [subCat] } }, filter, { isDeleted: false }, { isPublished: true }] }).populate("authorId")
return res.status(200).send({ data: blogs })
}
if (filter.tags != undefined && filter.subcategory != undefined) {
let subCat = filter.subcategory
let tags = filter.tags
delete filter.subcategory;
delete filter.tags
let blogs = await BlogsModel.find({ $and: [{ subcategory: { $in: [subCat] } }, { tags: { $in: [tags] } }, filter, { isDeleted: false }, { isPublished: true }] }).populate("authorId")
return res.status(200).send({ data: blogs })
}
} catch (error) {
return res.status(500).send({ msg: "Error", error: error.message })
}

}
 //////////////////////////////////////////////////////////////////////////////////////////////
const updateBlogs = async function(req, res) {
try {
let blogId = req.params.blogId;
let body = req.body;
let validBlog = await BlogsModel.findOne({ $and: [{ _id: blogId }, { isDeleted: false }] })
if (!validBlog) {
return res.status(400).send({ status: "false", msg: "Enter a valid Blog Id" })
}
let updations = await BlogsModel.findOneAndUpdate({ _id: blogId }, { $set: body }, // isPublished:true, publishedAt:Date.now }},
{ new: true }
)
if (updations.isPublished == true) {
let publishDate = await BlogsModel.findOneAndUpdate({ _id: blogId }, { publishedAt: Date.now() }, { new: true })
return res.status(200).send({ status: true, data: publishDate })

}
return res.status(200).send({ status: true, data: updations })
} catch (error) {
return res.status(500).send({ msg: "Error", error: error.message })
}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteBlogById = async function(req, res) {
try {
let blog = req.params.blogId;
let validBlog = await BlogsModel.findOneAndUpdate({ _id: blog, isDeleted: false }, { $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true })
if (!validBlog) {
return res.status(404).send({ status: false, msg: "No such blog exists" })
}
return res.status(200).send({ status: true, msg: "Data deleted" })
} catch (error) {
return res.status(500).send({ msg: "Error", error: error.message })
}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteBlogByQueryParams = async function(req, res) {
try {
let categories = req.query;
let data = await BlogsModel.findOneAndUpdate(categories, { $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true })
if (!data) {
return res.status(404).send({ status: false, msg: "Doesn't Exist" })
}
} catch (error) {
return res.status(500).send({ msg: "Error", error: error.message })
}
}


module.exports.createBlogs = createBlogs;
module.exports.getBlogs = getBlogs;
module.exports.updateBlogs = updateBlogs;
module.exports.deleteBlogById = deleteBlogById;
module.exports.deleteBlogByQueryParams = deleteBlogByQueryParams;