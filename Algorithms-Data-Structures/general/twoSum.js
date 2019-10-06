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
let nums = [2, 7, 11, 15];
let target = 9;

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

function twoSum(arr, target) {
  let hash = {};
  // let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (arr[i] + complement === target && hash[complement] !== undefined) {
      return [hash[complement], i];
    } else {
      hash[arr[i]] = i;
    }
  }
}

// true or false twoSums

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return true or false

// naive apporach would be to check every combination of numbers

function twoSumsBoolean(arr, target) {
  // need to find the complement of the other
  // iterate to build hash of complement
  // iterate through arr and check if it is the complement in hash
  let hash = {};
  // for (let num of arr) {
  //   hash[num] = num;
  // }
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (arr[i] + complement === target && hash[complement] !== undefined) {
      return true;
    } else {
      // this means that complement is in the array
      hash[arr[i]] = true;
    }
  }
  return false;
}

// two pointer approach
// sorted arr and start from the beg/end
// time: O(nlogn)
// space: O(1);
function twoSumsTwoPoint(arr, target) {
  // sort arr
  // have two pointers
  // iterate
  // if sum is greater than move end pointer down
  // if sum is less than move beg pointer up
  arr.sort((a, b) => {
    return a - b;
  });
  let beg = 0;
  let end = arr.length - 1;
  while (beg < end) {
    if (arr[beg] + arr[end] === target) {
      return true;
    } else if (arr[beg] + arr[end] > target) {
      end--;
    } else {
      beg++;
    }
  }
  return false;
}
console.log(twoSumsTwoPoint(nums, target)); // true;
console.log(twoSumsTwoPoint([100, 2, 3], 10)); // false;
console.log(twoSumsTwoPoint([100, 2, 5], 102)); // true;
console.log(twoSumsBoolean([100, 2, 5], 102), 'BOOLEAN'); // true;
