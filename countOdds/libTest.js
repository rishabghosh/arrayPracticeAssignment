let assertEq = require('assert').deepEqual;
let {countOdds}  = require('./lib.js');

const testCountOdds = function(input,expected,func){
  let actual = func(input);
  assertEq(expected, actual);
  console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
}
//test with zero :
input = [0];
testCountOdds(input,[],countOdds);

//test with one odd :
input = [1];
testCountOdds(input,[1],countOdds);

//test with one even :
input = [2];
testCountOdds(input,[],countOdds);

//test with negetive odd :
input = [-1];
testCountOdds(input, [-1], countOdds);

//test with negetive even :
input = [-2];
testCountOdds(input,[],countOdds);

//test with two odds :
input = [-1, 1];
testCountOdds( input, [-1, 1], countOdds);
 
//test with multiple numbers : 
input = [1,2,3,4,5,6,0,-1,-2,-3,-4,-5,-6]
testCountOdds( input,[1,3,5,-1,-3,-5], countOdds);
