const assertEq = require("assert").deepEqual;
const selectEverySecond = require("./lib").selectEverySecond;

// check with empty array : 
assertEq( selectEverySecond([]), [] );

//check with one number :
assertEq( selectEverySecond([1]), []);

//check with two numbers :
assertEq( selectEverySecond([1,2]), [2]);

//check with multiple elements :
input = [ 1,2,3,4,'a','b','c','d'];
expectedOutput = [2,4,'b','d'];
assertEq( selectEverySecond(input), expectedOutput );

