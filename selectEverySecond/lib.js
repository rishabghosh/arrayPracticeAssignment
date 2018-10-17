const selectEverySecond = function(elements){
  let result = [];
  for( let index = 1; index < elements.length; index += 2){
    result.push( elements[index] )
  }
  return result;
}

exports.selectEverySecond = selectEverySecond;
