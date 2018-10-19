let assertEq = require('assert').deepEqual;
let {findUniques}  = require('./uniqueLib.js');

const testfindUniques = function(input,expected,func){
  let actual = func(input);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with empty array :
input = [];
testfindUniques(input,[],findUniques);

//test with one number :
input = [1];
testfindUniques(input,[1],findUniques);

//test with two same numbers :
input = [1,1];
testfindUniques(input,[1],findUniques);

//test with 3 same numbers 
input = [-1,-1,-1];
testfindUniques(input,[-1],findUniques);

//test with multiple numbers :
input = [1,2,3,-1,2,3,0,-0,12,3];
testfindUniques(input,[1,2,3,-1,0,12],findUniques);

