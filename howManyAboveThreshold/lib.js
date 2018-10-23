const howManyAboveLimit = function(list, threshold){
  const isAbove = function(number){
    return number > threshold
  }
  return list.filter(isAbove).length;
}

exports.howManyAboveLimit = howManyAboveLimit;
