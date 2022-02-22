let _= require("lodash");
let arrayMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const result =  _.chunk(arrayMonth, 3);

module.exports.month = result;