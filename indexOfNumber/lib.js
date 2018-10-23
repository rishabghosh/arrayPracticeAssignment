/*
const indexOfNumber = function(list, checkWith){
  let result = {output : "Not Found"};
  for(let index = list.length-1; index >=0; index --){
    if(list[index] === checkWith){
      result["output"] = index;
    }
  }
  return result.output;
}
*/

const addIndex = function (list){
  let index = 0;
  return list.map( (elem)=> [ elem, index++] )
}

const findCandidate = function(elem){
  return elem[0] == this;
}

const indexOfNumber = function(list, candidate){
  let indexedElem = addIndex(list);
  return indexedElem.filter( findCandidate, candidate)[0][1];
}

exports.indexOfNumber = indexOfNumber;
