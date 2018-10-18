const minInList = require('./lib.js').lowestNumber;
const assertEq = require('assert').equal;

//check with 0 :
assertEq( minInList([0]), 0 );

//check with 1 :
assertEq( minInList([1]), 1 );

//check with 2 :
assertEq( minInList([2]), 2 );

//check with negetive number :
assertEq( minInList([-2]), -2 );

//check with two positive numbers :
assertEq( minInList([1,2]), 1 );

//check with positive & negetive numbers :
assertEq( minInList([1,-2,0]), -2 );

//check with big list :
input = [1,2,3,4,56,0,-2,-3,57,0,-4,0];
assertEq( minInList(input), -4 );

console.log("All test passed");
