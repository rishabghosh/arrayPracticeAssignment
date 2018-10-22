const assertEq = require("assert").deepEqual;
const odd = require("./lib.js").odd;
const even = require("./lib.js").even;

//equal wont work because expecetd and original array outputs have diff addresses.

//checking with empty array:
assertEq( odd([]),[]);
assertEq( even([]), []);

//checking with one odd:
assertEq( odd([1]), [1]);
assertEq( even([1]), []);

//checking with odd and even:
assertEq( odd([1,2]), [1]);
assertEq( even([1,2]), [2]);

//checking with one even:
assertEq( odd([2]),[] );
assertEq( even([2]), [2] );

//checking with negetive odd:
assertEq( odd([-1]), [-1]);
assertEq( even([-1]), []);

//checking with negetive even:
assertEq( odd([-2]), [] );
assertEq( even([-2]), [-2] );

//checking with list of numbers:
assertEq( odd([1,2,3,4]), [1,3] );
assertEq( even([1,2,3,4]), [2,4] );

console.log( "All tests passed");
