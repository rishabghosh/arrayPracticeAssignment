const zipElements = function(list1, list2){
  let result = [];
  let maxLength = list1.length;
  if(list2.length > maxLength){
    maxLength = list2.length;
  }

  for(let index = 0; index < maxLength; index ++){
    result.push([ list1[index], list2[index] ]);
  }
  return result;
}

exports.zipElements = zipElements;
