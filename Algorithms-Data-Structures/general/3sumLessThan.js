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

// Input: nums = [-2,0,1,3], and target = 2
// output: 2 ways to get less than target number
// [1, 4, 5, 6, 7, 7], 1
// how to get an O^2 time complexity
// understand the problem, concrete examples, break it down, solve/simplify, refactor
function three(nums, target) {
  // store count of how many times a triplet sum is less than target number
  // sort array
  // iterate through array stopping 2 numbers before end
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    sum += two(nums, i + 1, target - nums[i]);
  }
}

function two(nums, startIndex, target) {
  // sum
  let sum = 0;
  // left pointer and right pointer of a sorted array
  let left = startIndex;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      sum += right - left;
      left++;
    } else {
      right--;
    }
  }
  return sum;
}

// time: O(n^2)
// space: O(1)
function smaller(nums, target) {
  let count = 0;
  // sort array
  nums.sort((a, b) => a - b);
  if (nums.length === 3) {
    let sum = nums[0] + nums[1] + nums[2];
    return sum === target ? 1 : 0;
  }

  // loop over sorted array with 2 other pointers
  // two pointers on opposite end of array move accordingly if it's less than or more
  for (let i = 0; i < nums.length - 3; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        count++;
        left++;
        right--;
      } else if (sum < target) left++;
      else right--;
    }
  }
  return count;
}
