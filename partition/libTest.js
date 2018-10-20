let assertEq = require('assert').deepEqual;
let {partition}  = require('./lib.js');

const testPartition = function(list, limit, expected,func){
  let actual = func(list, limit);

  console.log("For list :", list, ", limit :", limit);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with empty list :
list = [];
limit = 0;
expected = [ [], [] ]
testPartition(list, limit, expected, partition);

//test with one number :
list = [1];
limit = 0;
expected = [ [1], [] ]
testPartition(list, limit, expected, partition);

//test with one number
list = [-1];
limit = 0;
expected = [ [], [-1] ]
testPartition(list, limit, expected, partition);

//test with two numbers :
list = [1,2];
limit = 1;
expected = [ [2], [1] ]
testPartition(list, limit, expected, partition);

//test with  multiple numbers :
list = [1,2,3,4,5,6,7,8,9];
limit = 5;
expected = [ [6,7,8,9], [1,2,3,4,5] ]
testPartition(list, limit, expected, partition);

