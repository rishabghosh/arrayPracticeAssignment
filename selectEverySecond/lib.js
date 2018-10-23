const mapIndex = function(index){
  return function(){
    return index++ %2 !== 0;
  }
}

const selectEverySecond = function(list){
  return list.filter( mapIndex(0) );
}

exports.selectEverySecond = selectEverySecond;
