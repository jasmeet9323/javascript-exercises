const repeatString = function(string, number) {
	let rString = '';
	if(number < 0) {
    return 'ERROR';
  } else {
    for (let i = number - 1; i >= 0; i--) {
     rString += string;
   }
 }
 return rString;
}

module.exports = repeatString;
