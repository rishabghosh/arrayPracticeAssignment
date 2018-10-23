const rotateList = function(list, times){
  let result = list.slice();

  for(let count = 0; count < times; count ++){
    result.push( result.shift() );
  }
  return result;
}
 
exports.rotateList = rotateList;
