const isEven = function(number){
  return ( number %2 === 0);
}
 
const countEvens = function(list){
  totalEvens = list.filter( isEven )
  return totalEvens.length;
}

exports.countEvens = countEvens;
