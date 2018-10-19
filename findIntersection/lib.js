const {findUniques} = require('./uniqueLib.js');

const findIntersection = function(list1, list2){
  let totalList = list1.concat(list2);
  let result = findUniques(totalList);
  return result;
}

exports.findIntersection = findIntersection;
