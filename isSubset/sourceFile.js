const {isSubset} = require('./lib.js');
const input1 = ["some", "text"];
const input2 = ["this", "is", "just", "some", "text"];

console.log("is", input1,"a subsring of", input2, "?");
console.log( "answer:", isSubset(input1, input2) );
