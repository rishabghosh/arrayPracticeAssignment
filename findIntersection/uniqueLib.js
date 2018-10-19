const findUniques = function(list){
  let result = [];

  for(let index = 0; index < list.length; index ++){
    if( !result.includes(list[index]) ){
      result.push(list[index]);
    }
  }
  return result;
}

exports.findUniques = findUniques;
