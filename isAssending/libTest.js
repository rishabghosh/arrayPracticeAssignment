let assertEq = require('assert').deepEqual;
let {isAssending}  = require('./lib.js');

const testisAssending = function(input,expected,func){
  let actual = func(input);
  assertEq(expected, actual);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
}

//test with empty array :
input = [];
testisAssending(input,"Dont have enough data",isAssending);

//test with one number:
input = [1];
testisAssending(input,"Dont have enough data",isAssending);

//test with two numbers:
input = [1,2];
testisAssending(input,"yes", isAssending);

//test with non-asssending array:
input = [1,2,1];
testisAssending(input,"no", isAssending);

//test with asswnding array:
input = [1,2, 3, 4, 6, 99];
testisAssending(input,"yes", isAssending);




