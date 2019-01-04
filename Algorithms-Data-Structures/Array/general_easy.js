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
