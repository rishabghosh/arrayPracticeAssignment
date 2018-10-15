const selectOddNumbers = function(listOfNumbers){
  let listOfOdds = [];
  for(let index = 0; index < listOfNumbers.length; index ++){
    if(listOfNumbers[index] % 2 != 0){
      listOfOdds.push(listOfNumbers[index]);
    }
  }
  return listOfOdds;
}

const selectEvenNumbers = function(listOfNumbers){
  let listOfEvens = [];
  for(let index = 0; index < listOfNumbers.length; index ++){
    if(listOfNumbers[index] % 2 == 0){
      listOfEvens.push(listOfNumbers[index]);
    }
  }
  return listOfEvens;
}

 
exports.odd = selectOddNumbers;
exports.even = selectEvenNumbers;




