let assertEq = require('assert').deepEqual;
let {indexOfNumber}  = require('./lib.js');

const testindexOfNumber = function(input, number, expectedIndex,func){
  let actualIndex = func(input, number);
  console.log("For input :", input);
  console.log("expectedIndex :", expectedIndex);
  console.log("actualIndex :", actualIndex);
  console.log("------------");
  assertEq(expectedIndex, actualIndex);
}

//test one with 1 :
input = [1];
number = 1;
testindexOfNumber(input, number, 0, indexOfNumber);

//test with a non exsisting number :
input = [2];
number = 1;
testindexOfNumber(input, number, 'Not Found', indexOfNumber);


//test negetive number : 
input = [-2];
number = -2;
testindexOfNumber(input, number, 0, indexOfNumber);

//test two numbers with 2nd number :
input = [1,2];
number = 2;
testindexOfNumber(input, number, 1, indexOfNumber);

//test multiple numbers with first number:
input = [1,2,3,4,5,1,5,3,4,7,6,0,7,4];
number = 1;
testindexOfNumber(input, number, 0, indexOfNumber);

//test multiple numbers with last number:
number = 7;
testindexOfNumber(input, number, 9, indexOfNumber);

//test multiple numbers with middile number:
number = 5;
testindexOfNumber(input, number, 4, indexOfNumber);

