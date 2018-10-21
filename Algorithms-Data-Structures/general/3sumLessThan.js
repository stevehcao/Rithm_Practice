// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// Example:

// Input: nums = [-2,0,1,3], and target = 2
// Output: 2
// Explanation: Because there are two triplets which sums are less than 2:
//              [-2,0,1]
//              [-2,0,3]
// Follow up: Could you solve it in O(n2) runtime?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// have to sum 3 numbers and check if it is less than target
// brute force would be just to iterate and find every possible combination
var threeSumSmaller = function(nums, target) {
  // store results array
  // find all possible combo of triplets
  let found = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(nums[i], 'I');
        console.log(nums[j], 'J');
        console.log(nums[k], 'K');
        console.log('COUNT', i);
        if (nums[i] + nums[j] + nums[k] < target) {
          found++;
        }
      }
    }
  }
  return found;
};

let arr1 = [-2, 0, 1, 3];
let target1 = 2;

console.log(threeSumSmaller(arr1, target1));
