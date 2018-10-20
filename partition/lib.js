const partition = function(list, delimiter){
  let largerPart = [];
  let smallerPart = [];
  let result = [largerPart, smallerPart];

  for( let index = 0; index < list.length; index ++){

    if(list[index] > delimiter){
      largerPart.push(list[index]);
    } else {
      smallerPart.push(list[index]);
    }
  }

  return result;
}

exports.partition = partition;
