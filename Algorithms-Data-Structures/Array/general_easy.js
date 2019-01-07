/**
 * @param {number[]} nums
 * @return {number}
 */
/* find the largest num in arr, iterate through and compare that to the doubleof the current num
   return idx of the largest num if it is larger than twice the number of every other number
   could use .every(cb) but how to find the idx after?
*/
var dominantIndex = function(nums) {
  const largest = Math.max(...nums);
  const largestIndex = nums.findIndex(x => x === largest);
  const restofNums = nums.splice(largestIndex, 1);

  const check = nums.every(num => largest >= num * 2);

  if (!check) {
    return -1;
  }
  return largestIndex;
};

/**
 * faster version slightly
 * In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:

Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 

Example 2:

Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 

Note:

nums will have a length in the range [1, 50].
Every nums[i] will be an integer in the range [0, 99].
 * @param {Array} nums
 */

function fastLargeIdx(nums) {
  let maxIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIdx]) {
      maxIdx = i;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[maxIdx] < nums[j] * 2 && maxIdx !== j) {
      return -1;
    }
  }
  return maxIdx;
}

/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
 */

function plusOne(digits) {
  // add digits from the back of the arr
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 > 9) {
      digits[i] = 0;
    } else {
      // add just one normally and break out of loop
      digits[i]++;
      break;
    }
  }

  // check if first digit in arr is 0, if it is then change it to 1 and push
  if (digits[0] === 0) {
    // faster then trying to unshift which would cause re-indexing of numbers
    digits[0] = 1;
    digits.push(0);
  }
}
