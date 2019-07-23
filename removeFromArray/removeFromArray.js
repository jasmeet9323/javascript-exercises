const removeFromArray = function(...args) {
  const array = args[0]; // get the array
  const newArray = []; // return array

  // add to newArray if the item in array is
  // not in the arguments list
  array.forEach((item) => {
    if(!args.includes(item))
      newArray.push(item);
  })
  return newArray;
}

module.exports = removeFromArray;

// // A simpler, but more advanced way to do it is to use the 'filter' function,
// // which basically does what we did with the forEach above.

// // var removeFromArray = function(...args) {
// //   const array = args[0]
// //   return array.filter(val => !args.includes(val))
// // }
// //


