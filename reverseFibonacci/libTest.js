let expectedOutput = [];
const assertEq = require('assert').deepEqual;
const {reverseFibo} = require('./lib.js');

//check with length = 0 :
assertEq( reverseFibo(0), [] );

//check with length =1 :
assertEq( reverseFibo(1), [0] );

//check with length = 2 : 
assertEq( reverseFibo(2), [1,0] );

//check with length = 3 : 
assertEq( reverseFibo(3), [1,1,0] );

//check with length = 4 :
expectedOutput = [2,1,1,0];
assertEq( reverseFibo(4), expectedOutput );

//check with length = 5 :
expectedOutput = [3,2,1,1,0];
assertEq( reverseFibo(5), expectedOutput );

console.log("All tests passed");
