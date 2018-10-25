const isEven = function(number){
  return ( number %2 === 0);
}

const isOdd = function(number){
  return ( number %2 !== 0);
}

const extractEvens = function(list){
  return list.filter( isEven )
}

const extractOdds = function(list){
  return list.filter( isOdd )
}

// The exported name loses one important part of intent, that its a filtering/extracting operation
exports.odd = extractOdds;
exports.even = extractEvens;

