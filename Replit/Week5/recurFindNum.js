// Given an array of numbers (which can also contain nested arrays of numbers),
// return true if a given value can be found.

// input: array (can be of numbers or of array of arrays)
// output: boolean
// edge cases: empty array
// constraints: must use recursion
// Time: at least O(n), O of N because we will iterate overy array at least once so the time is dependent on the size of the input
// space: O(1), constant, space because we are not creating another other type of data structures

// Use recursion for this.

function find(arr, target) {
  // base case HIDDEN because you don't know when to stop
  // iterate through array check target
  for (let i = 0; i < arr.length; i++) {
    // condition if it is an array AND then you would recurse inside that array and seek the value again
    // console.log(arr[i])
    if (Array.isArray(arr[i]) && find(arr[i], target)) {
      return true;
    }
    if (arr[i] === target) return true;
  }
  return false;
}

// console.log(find([1, 2, 3], 2)); // true
// console.log(find([1, 2, 3], 4)); // false
console.log(find([1, [2, 3]], 2)); // true
// find([1, [2, 3]], 4); // false
// find([[[[[3]]]]], 3); // true
