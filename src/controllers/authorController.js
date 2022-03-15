const AuthorModel = require("../model/authorModel")
const validator = require('email-validator');
const createAuthor = async function(req, res) {
try {
let data = req.body;
let email = data.email;
if (validator.validate(email) == false) {
return res.status(400).send({ msg: "Please input a valid email" })
}
let savedData = await AuthorModel.create(data);
return res.status(201).send(savedData)
} catch (error) {
return res.status(500).send({ msg: "Error", error: error.message })
}
}


module.exports.createAuthor = createAuthor;
