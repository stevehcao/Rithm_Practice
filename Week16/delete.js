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
    }
    right++;
  }
  return nums;
}

// console.log(moveZeroesAgain([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroesAgain([1, 0, 0, 0, 1])); // [1, 1, 0, 0, 0];
console.log(moveZeroesAgain([1, 3, 10, 2])); // [1,3,10,2]

console.log(moveZeroesAgain([4, 1, 2, 0, 0, 1, 2, 1, 0])); // [4,1,2,1,2,1,0,0,0]

moveZeroesAgain([6, 1, 2, 3, 5, 1, 0]); // [6,1,2,3,5,1,0]

moveZeroesAgain([0, 6, 1, 2, 3, 5, 1, 0]); // [6,1,2,3,5,1,0,0]

moveZeroesAgain([12, 2, 0, 0, 2, 1]); // [12,2,2,1,0,0]