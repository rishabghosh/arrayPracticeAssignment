const howManyBelowLimit = function(list, threshold){
  let result = 0;
  for(let index = 0; index < list.length; index ++){
    if(list[index] < threshold){
      result ++;
    }
  }
  return result;
}

exports.howManyBelowLimit = howManyBelowLimit;
