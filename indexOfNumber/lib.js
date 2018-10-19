const indexOfNumber = function(list, checkWith){
  let result = {output : "Not Found"};
  for(let index = list.length-1; index >=0; index --){
    if(list[index] === checkWith){
      result["output"] = index;
    }
  }
  return result.output;
}

exports.indexOfNumber = indexOfNumber;
