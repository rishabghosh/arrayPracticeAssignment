const isEven = function(counter, number){
  let {count} = counter;
  if( number %2 === 0){
    count ++;
  }
  return count;
}
 
const countEvens = function(list){
  let counter = {count : 0};
  for(let index = 0; index < list.length; index ++){
    counter.count = isEven(counter, list[index]);

 }
  return counter.count;
}

exports.countEvens = countEvens;
