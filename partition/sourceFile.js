const {partition} = require('./lib.js');
const list = [1,2,3,4,5,6,7,8,9];
const delimiter = 5;

console.log("list:", list, ", delimiter:", delimiter);
console.log("output:", partition(list, delimiter) );
