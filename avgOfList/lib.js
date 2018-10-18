const calculateAvg = function(list){
  let result = 0;
 for(let index = 0; index < list.length; index ++){
  result += list[index];
  }
  return result;
}

exports.calculateAvg = calculateAvg;
