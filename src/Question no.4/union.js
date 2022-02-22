const _ = require('lodash');
let x = [1, 3, 5, 27, 9, 17, 13, 15, 17, 11];
let y = [10, 7, 75, 7, 9, 1, 13, 15, 10, 19];
let z = [1, 3, 2, 7, 9, 11, 13, 16, 17, 19];
let a = [13, 3, 55, 4, 9, 11, 13, 15, 17, 17];
let b = [1, 63, 5, 7, 9, 10, 13, 15, 17, 15];
let newArray = _.union(x, y, z, a, b);
module.exports.myArray2 = newArray