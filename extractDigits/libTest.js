let assertEq = require('assert').deepEqual;
let {extractDigits}  = require('./lib.js');

const testextractDigits = function(input,expected,func){
  let actual = func(input);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with one digit number :
input = 1;
testextractDigits(input,[1],extractDigits);

//test with two digit number :
input = 12;
testextractDigits(input,[1,2],extractDigits);

//test with multiple digit number :
input = 123456;
testextractDigits(input,[1,2,3,4,5,6],extractDigits);
