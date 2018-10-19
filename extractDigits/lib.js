const extractDigits = function(number){
  let object = {input : number};
  object["string"] = object.input.toString();
  let result = [];

  for(let index = 0; index < object.string.length; index ++){
      result.push( parseInt( object.string[index] ) ); 
  }
  return result;
}

exports.extractDigits = extractDigits;
