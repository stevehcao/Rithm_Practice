// Write a function called Write a function called separatePositiveseparatePositive which accepts an array of non-zero integers.
//Separate the positive integers to the left and the negative integers to the right.
//The positive numbers and negative numbers need not be in sorted order.

// Constraints:

// Time Complexity:  O(N)
// Space Complexity:  O(1)

// To meet the space complexity constraints, perform the separation in-place (i.e., do not create/build a copy of the input array)

// Examples:

// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]

// input: array
// output: array
// assume accepts array of NON-zero integers
// separate the positive integers to the left and the negative integers to the right
// use two pointers? one at start and one at the end to check? move each accordingly to condtions?

// ES6 swap [a, b] = [b, a];

function separatePositive(arr) {
  // two pointers
  let left = 0;
  let right = arr.length - 1;
  // iterate using a while loop since we don't know when we will be done
  while (right > left) {
    // on first check if left pointer is + && right pointer is - then swap
    if (arr[left] > 0 && arr[right] < 0) {
      // swap numbers
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // and move both pointers towards middle
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
  return arr;
}

console.log(separatePositive([2, -1, -3, 6, -8, 10])); // [2, 10, 6, -3, -1, -8]
console.log(separatePositive([5, 10, -15, 20, 25])); // [5, 10, 25, 20, -15]
console.log(separatePositive([-5, 5])); // [5, -5]
console.log(separatePositive([1, 2, 3])); // [1, 2, 3]
