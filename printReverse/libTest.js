assertEq = require("assert").deepEqual;
reverse = require("./lib.js").reverse;

//check with blank : 
assertEq( reverse([]), [] );

//check with one number :
assertEq( reverse([1]), [1]);

//check with negetive number : 
assertEq( reverse([-9]), [-9]);

//check with multi-digit number :
assertEq( reverse([123]), [123]);

//check with two numbers : 
assertEq( reverse([1,2]), [2, 1]);

//check with multiple numbers : 
assertEq( reverse([1,2, -3, 10, 1234]), [1234,10,-3,2,1] );

//check with numbers and letters :
assertEq( reverse([1, 2, 'a', 'b', 'c']), ['c', 'b', 'a', 2 ,1] );

//check with characters : 
assertEq( reverse([ "/", "\n", "*"]), [ "*", "\n", "/"] );

