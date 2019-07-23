const reverseString = function(string) {

// iterating through string
//const len = string.length;
// let rString = '';
// for(let i = len-1; i >= 0 ;i--){
//   rString += string[i];
// }
// return rString;

// or simply
 return string.split('').reverse().join('');
}

module.exports = reverseString
