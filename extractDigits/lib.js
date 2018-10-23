const evaluateString = function(string){
  return eval(string); 
}

const extractDigits = function(number){
  let stringOfNumbers = number.toString().split("");
  return stringOfNumbers.map( evaluateString );
}

exports.extractDigits = extractDigits;
