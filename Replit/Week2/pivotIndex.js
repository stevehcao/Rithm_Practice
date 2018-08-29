// Instructions from your teacher:
// Write a function called pivotIndex which accepts an array of
// integers, and
// returns the pivot index where the sum of the items to
// the left equal to the sum of the items to the right.
// If there are more than one valid pivot index,
// return the smallest value.

// Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

// Sample Input / Output:
// input: array
// output: num ( index value)
// should find the point where the left and the right sum are the same
// if none then return -1

function pivotIndex(arr) {
  // have sum of left side and sum of right sided
  let leftSum = 0;
  let rightSum = arr.reduce((acc, curr) => acc + curr, 0);
  // start sum of left as 0, sum of right is the whole array
  let pivotIdx = -1;
  // iterate through array
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    if (leftSum === rightSum) {
      pivotIdx = i;
      break;
    }
    rightSum -= arr[i];
  }
  // add first num to left sum
  // add statement to check if save how it want us
  return pivotIdx;
}

console.log(pivotIndex([1, 2, 1, 6, 3, 1])); // 3
//pivotIndex([5, 2, 7]); // -1  no valid pivot index
//pivotIndex([-1, 3, -3, 2]); // 1 valid pivot at 2: -1 + 3 =
