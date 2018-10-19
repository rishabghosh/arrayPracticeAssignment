const reverseArray  = function(list){
 let result = [];

  for(let index = list.length-1; index >= 0; index --){
    result.push(list[index]);
  }

  return result;
}

exports.reverseArray = reverseArray;
