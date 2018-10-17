const maxInList = require('./lib.js').greatestNumber;
const assertEq = require('assert').equal;

//check with 0 :
assertEq( maxInList([0]), 0 );

//check with 1 :
assertEq( maxInList([1]), 1 );

//check with 2 :
assertEq( maxInList([2]), 2 );

//check with negetive number :
assertEq( maxInList([-2]), -2 );

//check with two positive numbers :
assertEq( maxInList([1,2]), 2 );

//check with positive & negetive numbers :
assertEq( maxInList([1,-2,0]), 1 );

//check with big list :
input = [1,2,3,4,56,0,-2,-3,57,0,-4,0];
assertEq( maxInList(input), 57 );

console.log("All test passed");
