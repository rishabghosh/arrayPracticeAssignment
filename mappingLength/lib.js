const findLength = function(text){
  return text.length;
}

const mapLength = function(list){
  return list.map( findLength );
}

exports.mapLength = mapLength;

