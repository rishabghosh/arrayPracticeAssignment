const findmax = function(num1, num2){
  return Math.max(num1, num2);
}

const greatestNumber = function(list){
  return list.reduce( findmax );
}

exports.greatestNumber = greatestNumber;
