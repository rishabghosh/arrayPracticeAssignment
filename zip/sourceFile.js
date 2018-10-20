const {zipElements} = require('./lib.js');
const input1 = [1,2,3];
const input2 = [2,3,'a'];
console.log("for lists:", input1, ",", input2);
console.log("output is:", zipElements(input1,input2) );
