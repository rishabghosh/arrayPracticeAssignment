let assertEq = require('assert').deepEqual;
let {findIntersection}  = require('./lib.js');

const testfindIntersection = function(input1, input2, expected,func){
  let actual = func(input1, input2);

  console.log("For input :", input1,",",  input2);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with empty arrays :
input1 = [];
input2 = [];
testfindIntersection(input1, input2, [], findIntersection);

//test with one empty array :
input1 = [1];
input2 = [];
testfindIntersection(input1, input2, [1], findIntersection);

//test with empty arrays :
input1 = [];
input2 = [1];
testfindIntersection(input1, input2, [1], findIntersection);

//test with one number each arrays :
input1 = [1];
input2 = [2];
testfindIntersection(input1, input2, [1,2], findIntersection);

//test with same number each arrays
input1 = [1];
input2 = [1];
testfindIntersection(input1, input2, [1], findIntersection);

//test with a unique array elements :
input1 = [1,2,3];
input2 = [4,5,6];
expected = [1,2,3,4,5,6];
testfindIntersection(input1, input2,expected , findIntersection);

//test with  multiple elements :
input1 = [1,2,3,4,5,6,1,2,3];
input2 = [4,5,6,7,8,9,4,5,6];
expected = [1,2,3,4,5,6,7,8,9];
testfindIntersection(input1, input2, expected, findIntersection);


