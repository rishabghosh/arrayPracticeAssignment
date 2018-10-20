let assertEq = require('assert').deepEqual;
let {rotateList}  = require('./lib.js');

const testRotateList = function(list, time, expected,func){
  let actual = func(list, time);

  console.log("For list :", list, ", time :", time);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with empty list :
list = [];
time = 0;
testRotateList(list, time, [], rotateList);

//test with one element 0 time :
list = [1];
time = 0;
testRotateList(list, time, [1], rotateList);

//test with one element 1 time :
list = [1];
time = 1;
testRotateList(list, time, [1], rotateList);

//test with two elements 1 time :
list = [1,2];
time = 1;
testRotateList(list, time, [2,1], rotateList);

//test with two elements 2 time :
list = [1,2];
time = 2;
testRotateList(list, time, [1,2], rotateList);

//test with multiple elements 1 time :
list = [1,2,3,4,5];
time = 1;
testRotateList(list, time, [2,3,4,5,1], rotateList);

//test with multiple elements 2 time :
list = [1,2,3,4,5];
time = 2;
testRotateList(list, time, [3,4,5,1,2], rotateList);

