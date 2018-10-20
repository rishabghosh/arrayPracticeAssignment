const {rotateList} = require('./lib.js');
const list = [1,2,3,4,5,'a'];
const times = 3;

console.log("for list:", list, "rotate", times, "times");
console.log("output: ", rotateList(list, times) );
