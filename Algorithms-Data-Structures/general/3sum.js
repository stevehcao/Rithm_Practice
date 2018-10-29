// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// taking in an array of integers

function threeSum(nums) {
  let triplets = [];
  if (nums.length < 3) return triplets;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    // check for duplicate first number!
    while (left < right) {
      // check for duplicate triplets inside the loop
      // these two check prevents you from having duplicate triplets
      if (left - i > 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }

      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return triplets;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([1, -1, -1, 0]));
