const findMin = function(num1, num2){
  return Math.min(num1, num2);
}

const lowestNumber = function(list){
  return list.reduce( findMin );
}

exports.lowestNumber = lowestNumber;
