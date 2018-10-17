const reverseFibo = require('./reverseFiboLib.js').reverseFibo;
const assertEq = require('assert').deepEqual;

//check with length = 0 : 
assertEq( reverseFibo(0), [] );
 
//check with length = 1 : 
assertEq( reverseFibo(1), [0] );

//check with length = 3 : 
assertEq( reverseFibo(3), [1,1,0] );

//check with length = 4 :
assertEq( reverseFibo(4), [2,1,1,0] );


console.log("All tests passed");
