const sumOfTwo = function(num1, num2){
  return num1 + num2;
}

const addNumbers = function(numbers){
  return numbers.reduce( sumOfTwo );
}

exports.sum = addNumbers;
