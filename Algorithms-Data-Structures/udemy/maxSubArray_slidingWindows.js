// max sub array
/**
 * write a function called max subarray sum which accepts
 * an array of integers and a number called num
 * should calculate the maximum sum of n consecutive elemnts in the array
 */

/**
 *
 * @param {Array} arr
 * @param {Number} num
 */
function maxSubSum(arr, num) {
  // edge case of num being greater than arr
  // variables for max and temp
  // sum first window
  // iterate try to use reduce? slice up until num
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }
  // sum of first sub array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // iterate through rest of the array
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// find the max sum of a subarray with the length of the # passed into the function
// consecutive elements
// constraints: time - O(n), space O(1)
function maxSubAgain(arr, num) {
  if (num > arr.length) return null;
  let max = 0;
  let initialSum = 0; // will have initial sum

  // sum the inital numbers
  for (let i = 0; i < num; i++) {
    initialSum += arr[i];
  }
  max = initialSum;
  // subtract the end of the subarray, add the next element in array
  // how to keep track on the subarray?
  for (let i = num; i < arr.length; i++) {
    initialSum = initialSum - arr[i - num] + arr[i];
    max = Math.max(max, initialSum);
  }
  return max;
}

console.log(maxSubAgain([100, 200, 300, 400], 2)); // 700
