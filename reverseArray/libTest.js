const reverseArray = require('./lib.js').reverseArray;
const assertEq = require('assert').deepEqual;

//check with empty array : 
assertEq( reverseArray([]), [] );
 
//check with zero : 
assertEq( reverseArray([0]), [0] );

//check with negetive number : 
assertEq( reverseArray([-1]), [-1] );

//check with a string :
assertEq( reverseArray(['a']), ['a']);

//check with two numbers :
assertEq( reverseArray([2,4]), [4,2] );

//check with multiple numbers :
input = [2,3,4,5,5,'a','b','c'];
expected = ['c', 'b', 'a', 5,5,4,3,2]
assertEq( reverseArray(input),expected );

console.log("All tests passed");
