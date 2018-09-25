// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [2, 7, 11, 15] 
let target = 9

// time: O(n);
// space: O(1);
var twoSumBruteForce = function(nums, target) {
  // iterate through each num twice and search for sum
    // push to index arr
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(twoSumBruteForce(nums, target));

// not complete
function twoSumAttempted(nums, target) {
  // create hash table of index and difference
  // iterate through nums again
   // look for match and return indices
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[i] = nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] + )
  }
}

function twoSumMap(nums, target) {
  // create hash table of index and difference
  // iterate through nums again
   // look for match and return indices
  let HT = new Map();
  for (let i = 0; i < nums.length; i++) {
    // .set(key, value);
    // .get(key);
    // .delete(key);
    // .has(key);

    // (key, value)
    HT.set(nums[i], i);
  }
  HT.entries();
  HT.keys();
  HT.values();
  // 

  for (let j = 0; j < nums.length; j++) {
    let complement = target - nums[j];
    if (HT.has(complement) && HT.get(complement) !== j) {
      return [j, HT.get(complement)];
    }
  }
}