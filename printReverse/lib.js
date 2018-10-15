const reverseNumbers = function(numbers){
  let result = [];
  for( let index = numbers.length -1; index>= 0; index --){
    result.push(numbers[index]);
  }
  return result;
}

exports.reverse = reverseNumbers;

