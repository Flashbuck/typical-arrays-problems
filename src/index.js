exports.min = function min (array = 0) {
  if(array == 0){
    return 0;
  }
  let min = 0;
  for (let i = 0; i < array.length; i++ ) array[i] < min ? min = array[i] : false;
  return min;
}

exports.max = function max (array = 0) {
  if(array == 0){
    return 0;
  } 
  let max = 0;
  for (let i = 0; i < array.length; i++ ) array[i] > max ? max = array[i] : false;
  return max;
}

exports.avg = function avg (array = 0) {
  if(array == 0){
    return 0;
  } 
  let sum = 0;
  for (let i = 0; i < array.length; i++ ) sum += array[i];
  return sum == 0 ? sum : sum / array.length;
}
