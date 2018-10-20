let assertEq = require('assert').deepEqual;
let {partition}  = require('./lib.js');

const testPartition = function(list, partitionAbove, expected,func){
  let actual = func(list, partitionAbove);

  console.log("For list :", list, ", partitionAbove :", partitionAbove);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with empty list :
list = [];
partitionAbove = 0;
expected = [ [], [] ]
testPartition(list, partitionAbove, expected, partition);

//test with one number :
list = [1];
partitionAbove = 0;
expected = [ [1], [] ]
testPartition(list, partitionAbove, expected, partition);

//test with one number
list = [-1];
partitionAbove = 0;
expected = [ [], [-1] ]
testPartition(list, partitionAbove, expected, partition);

//test with two numbers :
list = [1,2];
partitionAbove = 1;
expected = [ [2], [1] ]
testPartition(list, partitionAbove, expected, partition);

//test with  multiple numbers :
list = [1,2,3,4,5,6,7,8,9];
partitionAbove = 5;
expected = [ [6,7,8,9], [1,2,3,4,5] ]
testPartition(list, partitionAbove, expected, partition);

