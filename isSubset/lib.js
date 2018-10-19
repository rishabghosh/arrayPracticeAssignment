const isSubset = function(subsetCandidate, superset){
  let result = "yes";
  
    for(let index = 0; index < subsetCandidate.length; index ++){
      if( !superset.includes(subsetCandidate[index]) ){
        result = "no";
      }
    }
  return result;
}

exports.isSubset = isSubset;
