const isDecending = function(list){
  let result = {output : "yes"};

  if(list.length < 2){
    result["output"] = "Dont have enough data";
  }

  for(let index = 0; index < list.length; index ++){
    if(list[index] < list[index+1]){
      result = {output : "no"};
    }
  }
  return result.output;
}

exports.isDecending = isDecending;
