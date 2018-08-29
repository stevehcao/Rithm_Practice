// Given an array of integers, and a number, find the number of pairs of integers in the array
// whose sum is equal to the second parameter.
// You can assume that there will be no duplicate values in the array.

// input: arr, num
// output: num
// it should find all pairs that sums to the second argument
// assume: all numbers and no duplicates
function sortNum(a, b) {
  return a - b;
}

function countPairs(nums, target) {
  // sort arr
  let sorted = nums.sort(sortNum);
  //console.log(sorted);
  // use two pointers
  let counter = 0;
  let start = 0;
  let end = sorted.length - 1;
  // iterate through array
  while (start < end) {
    let sum = sorted[start] + sorted[end];
    // use one pointer at start and one at end
    // if sum is equal to target then add to count and move both pointers
    // if sum is less than move start pointer up
    if (sum === target) {
      counter++;
      start++;
      end--;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  // return count
  return counter;
}
// [1,2,3,4,5]
console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10)); // 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
// countPairs([1, 2, 3, 4, 5], -3); // 0
// countPairs([0, -4], -4); // 1
// countPairs([1, 2, 3, 0, -1, -2], 0); // 2

function countPairs1(nums, target) {}

// Bonus 1

// Solve this algorithm with the following constraints:

// Time Complexity - O(N)
// Space Complexity - O(N)

// O(n) / O(n)
function countPairsNN(arr, num) {
  let s = new Set(arr);
  let count = 0;
  for (let val of arr) {
    s.delete(val);
    if (s.has(num - val)) {
      count++;
    }
  }
  return count;
}

// Bonus 2

// Solve this algorithm with the following constraints:

// Time Complexity - O(N * log(N))
// Space Complexity - O(1)
