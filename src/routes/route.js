const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const assignmentController = require("../controllers/assignmentController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts)
router.get("/cowin/getByPin", cowinController.getByPin)
router.get("/cowin/getByDistrictId", cowinController.sessionByDistrictId)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/getSortedCities", assignmentController.getSortedCities)

router.post("/meme", cowinController.memeHandler)


module.exports = router;