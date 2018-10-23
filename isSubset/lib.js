const isSubset = function(subsetCandidate, superset){
  let result = "no";
  const isPresent = function(element){
    return superset.includes(element);
  }
  if(subsetCandidate.every(isPresent) ){
    result = "yes";
  }
  return result;
}  

exports.isSubset = isSubset;
