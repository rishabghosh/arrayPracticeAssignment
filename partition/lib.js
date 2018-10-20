const isGreater = function(number, limit){
  if(number > limit){
    return 0;
  }
  return 1;
}

const partition = function(list, limit){
  let result = [ [], [] ];

  for( let index = 0; index < list.length; index ++){
    result[ isGreater(list[index], limit) ].push(list[index]);
  }
  return result;
}

exports.partition = partition;
