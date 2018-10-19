const countEvens = function(list){
  const result = [];
  for(let index = 0; index < list.length; index ++){
    if(list[index] %2 === 0){
      result.push(list[index])
    }
  }
  return result;
}

exports.countEvens = countEvens;
