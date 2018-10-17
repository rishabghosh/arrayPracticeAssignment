const fiboSeries = require('./fiboSeriesLib.js').fiboSeries;

const reverseFibo  = function(length){
 let result = [];
 let currentSeries = fiboSeries(length);

  for(let index = currentSeries.length-1; index >= 0; index --){
    result.push(currentSeries[index]);
  }

  return result;
}

exports.reverseFibo = reverseFibo;
