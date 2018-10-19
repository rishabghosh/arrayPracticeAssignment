const {findDifference} = require('./lib.js');
const input1 = [1,2,3,4,4,5,6,6,'c'];
const input2 = [6,7,8,9,0,'a','b']

console.log("for input :", input1, ",", input2);
console.log("output:", findDifference(input1, input2) );
