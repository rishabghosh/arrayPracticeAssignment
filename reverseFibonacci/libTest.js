let expectedOutput = [];
const assertEq = require('assert').deepEqual;
const reverseFibo = require('./lib').reverseFibo;

//check with length = 0 :
assertEq( reverseFibo(0), [] );

//check with length =1 :
assertEq( reverseFibo(1), [0] );

//check with length = 2 : 
assertEq( reverseFibo(2), [0,1] );

//check with length = 3 : 
assertEq( reverseFibo(3), [0,1,1] );

//check with length = 4 :
expectedOutput = [0,1,1,2];
assertEq( reverseFibo(4), expectedOutput );

//check with length = 5 :
expectedOutput = [0,1,1,2,3];
assertEq( reverseFibo(5), expectedOutput );

console.log("All tests passed");
