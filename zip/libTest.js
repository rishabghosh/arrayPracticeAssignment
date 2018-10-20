let assertEq = require('assert').deepEqual;
let {zipElements}  = require('./lib.js');

const testZipElements = function(input1, input2, expected,func){
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
testZipElements(input1, input2, [], zipElements);

//test with one empty arrays :
input1 = [1];
input2 = [];
expected = [],
testZipElements(input1, input2, expected, zipElements);

//test with one empty arrays :
input1 = [];
input2 = [1];
expected = [],
testZipElements(input1, input2, expected, zipElements);

//test with one elements:
input1 = [1];
input2 = [2];
expected = [[1,2]],
testZipElements(input1, input2, expected, zipElements);

//test with strings :
input1 = ["a"];
input2 = ["b"];
expected = [["a","b"]],
testZipElements(input1, input2, expected, zipElements);

//test with multiple elements :
input1 = [1, 2, 3, 'a', 'b', 'c'];
input2 = [2,3,'c', 'd', 1, 5, 7];
expected = [ [1,2], [2,3], [3,'c'], ['a', 'd'], ['b', 1], ['c', 5] ],
testZipElements(input1, input2, expected, zipElements);


