const addNumbers = function(numbers){
  let result = 0;
  for(let index = 0; index < numbers.length; index ++){
        result += numbers[index];
  }  
  return result;
}

exports.sum = addNumbers;
