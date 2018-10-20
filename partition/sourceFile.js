const {partition} = require('./lib.js');
const list = [1,2,3,4,5,6,7,8,9];
const limit = 5;

console.log("list:", list, ", limit:", limit);
console.log("output:", partition(list, limit) );
