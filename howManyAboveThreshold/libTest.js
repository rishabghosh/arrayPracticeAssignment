let assertEq = require('assert').deepEqual;
let {howManyAboveLimit}  = require('./lib.js');

const testHowManyAboveLimit = function(input, limit, expected,func){
  let actual = func(input, limit);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with empty array, with threshold 1 :
input = [];
limit = 1;
testHowManyAboveLimit(input, limit, 0, howManyAboveLimit);

//test with zero, with threshold 1 :
input = [0];
limit = 1;
testHowManyAboveLimit(input, limit, 0, howManyAboveLimit);

//test with one, with threshold 1 :
input = [1];
limit = 1;
testHowManyAboveLimit(input, limit, 0, howManyAboveLimit);

//test with 2, with threshold 1 :
input = [2];
limit = 1;
testHowManyAboveLimit(input, limit, 1, howManyAboveLimit);

//test with two numbers, with threshold 1 :
input = [1,2];
limit = 1;
testHowManyAboveLimit(input, limit, 1, howManyAboveLimit);

//test with three numbers, with threshold 1 :
input = [1,2,3];
limit = 1;
testHowManyAboveLimit(input, limit, 2, howManyAboveLimit);

//test with multiple numbers, with threshold 5:
input = [5,6,7,10,15,20,25];
limit = 5;
testHowManyAboveLimit(input, limit, 6, howManyAboveLimit);

