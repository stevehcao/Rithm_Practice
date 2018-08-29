// Description
// Write a function called maxSubarraySum, which takes two parameters: an array(of numbers)
// and a single number. The function should find the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.

// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Examples
// input: arr of nums, num
// output: number
// constraints: time and space complex
// edge cases: the number of subarray is greater than the length of the array

function sum(arr) {}
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let max = 0;
  let currSum = 0;
  // have a current sum and a max sum
  // one window depending on what is passed in
  for (let i = 0; i < num; i++) {
    currSum += arr[i];
  }

  // current MAX and this should be the first window starting from 0 -> num
  max = currSum;

  // slide the window depending on passed in num and keep track and compare max sum
  // this next window will add the next number but subtract the last number
  for (let i = num; i < arr.length; i++) {
    currSum += arr[i] - arr[i - num];
    max = Math.max(max, currSum);
  }

  // let left = 0;
  // let right = num;
  // // interate through array and add next consecutive number that is passed in
  // while (left < arr.length && right < arr.length) {
  //   // add sum from left to right
  // }

  // check if current sum is greater than max
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39

maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5

console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5

console.log(maxSubarraySum([2, 3], 3)); // null

// /**
//  * This problem takes a sliding window approach, where
//  *  the width of the window is set to "k". In a loop,
//  *  it compares the difference between the current item in
//  *  the array with the i - kth item of the array, thereby
//  *  computing each possible window in the array, and taking
//  *  the max.
//  */
//
// function maxSubarraySumModel(arr, k) {

//   // there can be no valid sum if the array length is less than k
//   if (arr.length < k) return null;

//   let maxSum = 0;
//   let currentSum = 0;

//   // get sum of initial window 0...k
//   for (let i = 0; i < k; i++) {
//     currentSum += arr[i];
//   }

//   // our current sum is the best we've seen
//   maxSum = currentSum;

//   // slide: add new element, remove oldest, keeping track of largest sum
//   for (let i = k; i < arr.length; i++) {
//     currentSum += arr[i] - arr[i - k];
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// Constraints
// Time Complexity - O(N)
// Space Complexity - O(1)
