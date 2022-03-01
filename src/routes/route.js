const express = require('express');

const router = express.Router();


const allController = require('../controllers/allController')



router.post('/createNewAuthor', allController.createNewAuthor)
router.post('/createNewBook', allController.createNewBook)
router.get('/allBooks', allController.allBooks)
router.get('/updatedBookPrice', allController.updatedBookPrice)
router.get('/authorsName', allController.authorsName)

module.exports = router;