/**
 *
 * @param {Array} arr
 * take in an array and return a number that is the product of all elements
 * assume all valid numbers as each element
 */
function productOfArray(arr) {
  // base case
  if (arr.length === 0) return 1;
  // recursion, a function that calls itself until it doesn't
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
