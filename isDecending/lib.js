const isDecending = function(list){
  let result = "yes";

  const updateResult = function(acc, elem){
    if(acc < elem){
      result = "no";
    }
    return elem;
  }
  
  if(list.length < 2){
    return "Dont have enough data";
  }

  list.reduce(updateResult); 

  return result;
}

exports.isDecending = isDecending;
