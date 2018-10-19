const {findIntersection} = require('./lib.js');
const input1 = [1,2,3,4,5,6,12,1,2,3,4,0,-0];
const input2 = [1,2,3,4,5,1,2,3,'a','b'];
console.log('for input:', input1, ",", input2);
console.log('unique elements are:', findIntersection(input1, input2));
