const reverseFibo = function(length){
  let totalFibo = [];
  let firstNumber = -1;
  let secondNumber = 1;
  let result = 0;

  for(let count=0; count<length; count++){
    result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
    totalFibo.push(result);
  }
  return totalFibo.reverse() ;
}


exports.reverseFibo = reverseFibo;
