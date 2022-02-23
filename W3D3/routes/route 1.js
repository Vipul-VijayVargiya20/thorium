const express = require('express');
const router = express.Router();
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/sol1", function (req, res) {
 let arr= [1,2,3,5,6,7]
   let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  res.send(  { data: missingNumber  }  );
  });
 
  // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  router.get("/sol2", function (req, res) {
   let arr= [33, 34, 35, 37, 38]
   let len= arr.length
  let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
  let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  res.send(  { data: missingNumber  }  );
 });

module.exports = router;