/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 */

// my thought process
var moveZeroesLeet = function(nums) {
  // swap in place
  // use two pointers
  // iterate through array
  // swap if right pointer is not zero
  // move left and right pointer after swapping
  let left = 0;
  let right = 1;

  while (left < nums.length && right < nums.length) {
    if (nums[left] === 0 && nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right++;
    } else if (nums[right] === 0) {
      right++;
    }
  }
};

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// model solution
var moveZeroes = function(nums) {
  // swap in place
  // use two pointers
  // iterate through array
  // swap if right pointer is not zero
  // move left and right pointer after swapping
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[a]] = [nums[a], nums[i]];
      a++;
    }
  }
};

// input: arr
// output: array
// assume: all els are numbers
// Time Complexity: O(n)
// Space Complexity: O(1) -
// this should be in-place, modifying the original input array
// it should move all zeroes to end in place
//

// from before
function moveZeroesRep(arr) {
  // use two pointers?
  let one = 0;
  let two = 1;
  // iterate over array
  while (one < arr.length && two < arr.length) {
    if (arr[one] !== 0) {
      one++;
      two++;
      if (two === arr.length - 1 && arr[two] === 0) {
        break;
      }
    }
    if (arr[one] === 0) {
      if (arr[two] === 0) {
        two++;
      } else {
        [arr[one], arr[two]] = [arr[two], arr[one]];
        one++;
      }
    }
  }
  return arr;
}

moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]

moveZeroes([1, 3, 10, 2]); // [1,3,10,2]

moveZeroes([4, 1, 2, 0, 0, 1, 2, 1, 0]); // [4,1,2,1,2,1,0,0,0]

moveZeroes([6, 1, 2, 3, 5, 1, 0]); // [6,1,2,3,5,1,0]

moveZeroes([0, 6, 1, 2, 3, 5, 1, 0]); // [6,1,2,3,5,1,0,0]

moveZeroes([12, 2, 0, 0, 2, 1]); // [12,2,2,1,0,0]

// swap numbers in place!
function moveZeroesAgain(nums) {
  // two pointers
  let left = 0;
  let right = 0;
  // loop through array
  while (left < nums.length && right < nums.length) {
    // [0, 1, 0, 3, 12]
    if (nums[right] !== 0) {
      // swap if not zero
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right++;
    }
    right++;
  }
}
