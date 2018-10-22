const isOdd = function(number){
  return ( number %2 !== 0);
}

const countOdds = function(list){
  totalOdds = list.filter( isOdd )
  return totalOdds.length;
}

exports.countOdds = countOdds;
