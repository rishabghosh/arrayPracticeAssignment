const {howManyBelowLimit} = require('./lib.js');
const input = [1,2,3,4,5,6,7,8,9,0];
const limit = 5;

let result = howManyBelowLimit(input, limit);
console.log(result);
