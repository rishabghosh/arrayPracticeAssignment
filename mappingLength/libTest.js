let assertEq = require('assert').deepEqual;
let {mapLength}  = require('./lib.js');

const testmapLength = function(input,expected,func){
  let actual = func(input);
  assertEq(expected, actual);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
}

//test with empty string :
input = [''];
testmapLength(input,[0],mapLength);

//test with one letter :
input = ['a'];
testmapLength(input,[1],mapLength);

//test with two letter :
input = ['a', 'b'];
testmapLength( input, [1,1], mapLength);
 
//test with one words : 
input = ['word'];
testmapLength( input, [4], mapLength);

//test with multiple words :
input = ['Marry', 'had', 'a', 'little', 'lamb'];
testmapLength(input,[5,3,1,6,4],mapLength);

