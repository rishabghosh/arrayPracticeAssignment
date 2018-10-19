const {indexOfNumber} = require('./lib.js');
const input = [1,2,3,4,5,6,7,7,8,9,0,1,2,3];
const checkWith = 7;
console.log("for input :", input);
console.log("checkWith :", checkWith);
console.log("first Occurance In Index :", indexOfNumber(input, checkWith));
