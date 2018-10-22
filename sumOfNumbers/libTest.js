const assertEq = require("assert").equal;
const sum = require("./lib.js").sum;

//check with zero :
assertEq( sum([0]), 0);

//check with 1 :
assertEq( sum([1]), 1);

//check with negetive number :
assertEq( sum([-2]), -2);

//check with big number : 
assertEq( sum([3324]), 3324);

//check with two numbers : 
assertEq( sum([2,3]), 5);

//check with multiple numbers :
assertEq( sum([2,3,4,5,66,]), 80);

//check with positive & negetive numbers : 
assertEq( sum([2,-2,34,-34,56,-56]), 0);

console.log( "All tests passed" );
