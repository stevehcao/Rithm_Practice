// Write a function findPair that takes an unsorted array and a number n.

// Find if there exists a pair of elements in the array whose difference is n.

// This function should return true if the pair exists or false if it does not.
/**
 * input: arr, num
 * output: boolean
 * assume that arr is numbers and unsorted
 * it should check array if there are a pair of elements in the array whose difference is given
 *
 * sort array and then
 */
func;

function sorting(a, b) {
  return a - b;
}

function findPair(arr, diff) {
  // make set for constant time look up
  // set should have the difference [4, 1, 2, 6 etc...]
  let diffSet = new Set();
  for (let val of arr) {
    diffSet.add(Math.abs(val) - Math.abs(diff));
  }
  for (let val of arr) {
    if (diffSet.has(val)) return true;
  }
  //console.log(diffSet);
  return false;
}

function findPairSort(arr, diff) {
  // sort arr
  arr.sort(sorting);
  //console.log(arr);
  // use two pointers
  let left = 0;
  let right = 1;
  while (left < arr.length && right < arr.length) {
    if (left !== right && arr[right] - arr[left] === Math.abs(diff)) {
      return true;
    } else if (arr[right] - arr[left] < diff) {
      right++;
    } else if (arr[right] - arr[left] > diff) {
      left++;
    }
  }
  // iterate and check for different of absolute values
  // move pointers
  return false;
}
console.log(findPairSort([6, 1, 4, 10, 2, 4], 2));
console.log(findPairSort([6, 1, 4, 10, 2, 4], 22)); // false
// Examples
// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true

// // findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1); // true

// // findPair([4, -2, 3, 10], -6); // true

// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false

// console.log(findPair([], 0)); // false

// console.log(findPair([5, 5], 0)); // true

// console.log(findPair([1, 3, 4, 6], -2)); // true

// findPair([0, 1, 3, 4, 6], -2); // true

/** 

the following two are the same numbers with different ordering:
 4 - -4 = 8
 -4 - 4 = -8

**/

console.log(findPair([-4, 4], -8)); // true

console.log(findPair([-4, 4], 8)); // true

// Time & Space Requirements
// Don't submit the brute force O(n^2) solution!

// You have two options to solve the problem:

// Option 1:

// Time Complexity - O(n)
// Space Complexity - O(n)

// Option 2:

// Time Complexity - O(n lg n)
// Space Complexity - O(1)
