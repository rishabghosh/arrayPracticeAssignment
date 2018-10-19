const {findUniques} = require('./uniqueLib.js');

const findDifference = function(list1, list2){
  let uniqueList1 = findUniques(list1);
  let result = [];
  
    for(let index = 0; index < uniqueList1.length; index ++){
      if( !list2.includes(uniqueList1[index]) ){
        result.push(uniqueList1[index]);
      }
    }
  return result;
}

exports.findDifference = findDifference;
