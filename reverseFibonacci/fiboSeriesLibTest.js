let expectedOutput = [];
const assertEq = require('assert').deepEqual;
const fiboSeries = require('./fiboSeriesLib.js').fiboSeries;

//check with length = 0 :
assertEq( fiboSeries(0), [] );

//check with length =1 :
assertEq( fiboSeries(1), [0] );

//check with length = 2 : 
assertEq( fiboSeries(2), [0,1] );

//check with length = 3 : 
assertEq( fiboSeries(3), [0,1,1] );

//check with length = 4 :
expectedOutput = [0,1,1,2];
assertEq( fiboSeries(4), expectedOutput );

//check with length = 5 :
expectedOutput = [0,1,1,2,3];
assertEq( fiboSeries(5), expectedOutput );

console.log("All tests passed");
