let assertEq = require('assert').deepEqual;
let {howManyBelowLimit}  = require('./lib.js');

const testHowManyBelowLimit = function(input, limit, expected,func){
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
testHowManyBelowLimit(input, limit, 0, howManyBelowLimit);

//test with zero, with threshold 1 :
input = [0];
limit = 1;
testHowManyBelowLimit(input, limit, 1, howManyBelowLimit);

//test with two, with threshold 1 :
input = [2];
limit = 1;
testHowManyBelowLimit(input, limit, 0, howManyBelowLimit);

//test with two numbers, with threshold 2 :
input = [2, 1];
limit = 2;
testHowManyBelowLimit(input, limit, 1, howManyBelowLimit);

//test with three numbers, with threshold 2 :
input = [1,2,0];
limit = 2;
testHowManyBelowLimit(input, limit, 2, howManyBelowLimit);

//test with multiple numbers, with threshold 5:
input = [1,2,3,4,5,6,7,8,9,-1,-2,-3];
limit = 5;
testHowManyBelowLimit(input, limit, 7, howManyBelowLimit);

