const partition = function(list, limit){
  let result = [ [], [] ];

  const isGreater = function(number){
    return number > limit;
  }

  const isLowerOrEq = function(number){
    return number <= limit;
  }

  result[0] = list.filter(isGreater);
  result[1] = list.filter(isLowerOrEq);

  return result;
}

exports.partition = partition;
