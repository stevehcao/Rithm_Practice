// Description
// Implement a function called countUniqueValues, which accepts a sorted array, and
// counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

/*
input: array of numbers 
output: number
constraints: given below
assume: all numbers are sorted can be negative number
edge cases:  
*/

function countUniqueValues(arr) {
  // unique counter
  let uniq = 0;
  // use two pointers in order to check if next value is unique
  // this is possible because array is sorted
  let left = 0;
  let right = left + 1;
  // iterate through array
  while (left < arr.length) {
    // if values do not match add to counter
    if (arr[left] !== arr[right]) {
      uniq++;
      left++;
      right++;
    } else {
      left++;
      right++;
    }
    // else keep iterating
  }
  return uniq;
}

function MODELcountUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let latestUnique = 0;
  let numUniq = 0;

  for (let a of arr) {
    // every time arr[j] is a new number
    if (a !== arr[latestUnique]) {
      // move up i
      latestUnique++;
      // store the latestUnique
      arr[latestUnique] = a;
    }
  }
  // the index of latestUnique is how many times we've moved it up
  //   i.e. how many uniques we've found
  return latestUnique + 1;
}

/**
 * With O(N) space, it's trivial. Just make a set and take the size of the set
 */
// function countUniqueValuesSet(arr) {
//   return new Set(arr).size;
// }

// Examples
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7

console.log(countUniqueValues([])); // 0

console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// Constraints
// Time Complexity - O(n)
// Space Complexity - O(1)
