const zipElements = function(list1, list2){
  let result = [];
  let leastLength = Math.min(list1.length, list2.length);

  for(let index = 0; index < leastLength; index ++){
    result.push([ list1[index], list2[index] ]);
  }
  return result;
}
exports.zipElements = zipElements;
