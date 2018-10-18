const findLowestNumber = function(list){
  let index = 0;
  let result = list[index];

  while(index < list.length){
    if(result > list[index + 1]){
      result = list[index + 1];
    }
    index ++;
}
  return result ;
}

exports.lowestNumber = findLowestNumber;
