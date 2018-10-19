let assertEq = require('assert').deepEqual;
let {findDifference}  = require('./lib.js');

const testfindDifference = function(input1, input2, expected,func){
  let actual = func(input1, input2);

  console.log("For input :", input1, ",", input2);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with two empty arrays :
input1 = [];
input2 = [];
testfindDifference(input1, input2,[],findDifference);

//test with one empty array :
input1 = [1];
input2 = [];
testfindDifference(input1, input2, [1], findDifference);

//test with empty arrays :
input1 = [];
input2 = [1];
testfindDifference(input1, input2, [], findDifference);

//test with one number each arrays :
input1 = [1];
input2 = [2];
testfindDifference(input1, input2, [1], findDifference);

//test with same number each arrays
input1 = [1];
input2 = [1];
testfindDifference(input1, input2, [], findDifference);

//test with a unique array elements :
input1 = [1,2,3];
input2 = [4,5,6];
expected = [1,2,3];
testfindDifference(input1, input2,expected , findDifference);

//test with  multiple elements :
input1 = [1,2,3,4,5,6,1,2,3];
input2 = [4,5,6,7,8,9,4,5,6];
expected = [1,2,3];
testfindDifference(input1, input2, expected, findDifference);


