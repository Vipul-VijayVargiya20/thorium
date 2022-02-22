let obj1 = require("../logger/logger.js");
let obj2 = require("../util/helper.js");
let obj3 = require("../Question no.4/chunk");
let obj4 = require("../Question no.4/tail");
let obj5 = require("../Question no.4/union");
let obj6 = require("../Question no.4/frompair");
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj1.welcome("Welcome to my application. I am Vipul VijayVargiya and a part of FunctionUp Thorium cohort.");
    obj2.printDate("Today is 21st feb");
    obj2.printMonth("Month is February");
    obj2.getBatchInfo("Thorium, W3D1, the topic for today is Nodejs module system");
    console.log(obj1.endpoin1);
    console.log(obj2.endpoin2);
    res.send('Welcome to my application');
});

router.get('/hello', function (req, res){
    console.log(obj3.month);
    console.log(obj4.myArray);
    console.log(obj5.myArray2);
    console.log(obj6.myArray3);
    res.send('Question no.4 succesfully executed!!');
});
module.exports = router;