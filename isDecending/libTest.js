let assertEq = require('assert').deepEqual;
let {isDecending}  = require('./lib.js');

const testisDecending = function(input,expected,func){
  let actual = func(input);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);
}

//test with empty array :
input = [];
testisDecending(input,"Dont have enough data",isDecending);

//test with one number:
input = [1];
testisDecending(input,"Dont have enough data",isDecending);

//test with two non-decending numbers:
input = [1,2];
testisDecending(input,"no", isDecending);

//test with non-asssending array:
input = [1,2,1];
testisDecending(input,"no", isDecending);

//test with two descending numbers:
input = [4,3];
testisDecending(input,"yes", isDecending);


//test with decendinging array:
input = [99,98,6,5,4,3,2,0,-1];
testisDecending(input,"yes", isDecending);

