const addTwoElems = function(num1,num2){
  return num1+num2;
}

const calculateAvg = function(list){
  return list.reduce( addTwoElems ); 
}

exports.calculateAvg = calculateAvg;
