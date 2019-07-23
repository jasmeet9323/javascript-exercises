const sumAll = function(...args) {
  let min = args[0];
  let max = args[1];

  if(min < 0 || max < 0 || typeof min !== "number" ||
    typeof max !== "number")
      return 'ERROR'

  let sum = 0;
  
  if(min > max) {
    min = min + max;
    max = min - max;
    min = min - max;
  }

  for(let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll
