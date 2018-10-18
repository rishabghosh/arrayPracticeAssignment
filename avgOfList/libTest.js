let assertEq = require('assert').deepEqual;
let {calculateAvg}  = require('./lib.js');

const testAvg = function(input,expected,func){
  let actual = func(input);
  assertEq(expected, actual);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
}

//test with one number :
input = [1];
testAvg(input,1,calculateAvg);

//test with negetive number :
input = [-2];
testAvg(input, -2, calculateAvg);

//test with two numbers :
input = [-1, 1];
testAvg( input, 0, calculateAvg);
 
//test with multiple numbers : 
input = [-1,1,2,3,4,5,6,7,0,-0,-1,-2,-3,-4,-5,-6];
testAvg( input, 6, calculateAvg);
