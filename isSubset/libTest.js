let assertEq = require('assert').deepEqual;
let {isSubset}  = require('./lib.js');

const testIsSubset = function(input1, input2, expected,func){
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
testIsSubset(input1, input2,"yes", isSubset);

//test with one empty array :
input1 = [];
input2 = [1];
testIsSubset(input1, input2, "yes", isSubset);

//test with substring element = 1 letter :
input1 = ['a'];
input2 = ['a', 'b', 'c'];
testIsSubset(input1, input2, "yes", isSubset);

//test with sunstring is not present :
input1 = ['a', 'b', 'c'];
input2 = ['a'];
testIsSubset(input1, input2,"no", isSubset);

//test with  substring of multiple elements:
input1 = ["some", "text"];
input2 = ["this", "is", "just", "some", "text"];
testIsSubset(input1, input2,"yes", isSubset);

//test with two empty arrays :
input1 = ["the", "the", "the", "is"];
input2 = ["the", "the", "the", "is", "i", "am"];
testIsSubset(input1, input2,"yes", isSubset);


