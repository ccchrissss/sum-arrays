// Sum Numbers
function sum(numbers) {
  
  return numbers.reduce( (a, c) => a + c, 0)
  
};

console.log(sum([1,3,5]))


// params: numbers    // an array of numbers
// return: a number   // the sum of the numbers in the array
// e.g. sum([1,3,5])
// results in 9

// reduce method to sum the numbers of the array

