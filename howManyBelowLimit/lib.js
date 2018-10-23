const howManyBelowLimit = function(list, threshold){
  const isBelow = function(number){
    return number < threshold
  }
  return list.filter(isBelow).length;
}

exports.howManyBelowLimit = howManyBelowLimit;
