exports.classifyNumbers = function(numbers){
  let evens = [];
  let odds = [];
  let result = {};

  for(let index = 0; index < numbers.length; index ++){
    evens.push(numbers[index]);

    if(numbers[index] % 2 != 0){
     evens.pop(numbers[index]);
      odds.push(numbers[index]);
    }
  }
  result["evens"] = evens;
  result["odds"] = odds;
  return result;
}

