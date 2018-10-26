const addTwoElems = function(num1,num2){ // Function name says Elems - which is probably elements while the args are num1 and num2. which are numbers.
  return num1+num2;
}

// Does this calculate average or just the sum?
const calculateAvg = function(list){ // Avg or average? 
  return list.reduce( addTwoElems ); 
}

exports.calculateAvg = calculateAvg;
