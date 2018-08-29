// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers
// and an integer. The function should return the index of the integer in the array.
// If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)
// Space Complexity - O(1)
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arrRotated = [6, 7, 8, 9, 1, 2, 3, 4];
let arrRotated2 = [6, 7, 8, 9, 10, 1, 2, 3, 4];

function findRotatedIndex(arr, target) {
  // logic
  // find pivot first
  let pivot = findPivot(arr);
  if ()
  // find which half of pivot your target number is in???
  if (arr[0] < target) {
    recursiveBinarySearch(arr, target, pivot + 1, arr.length-1);
  }
}

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  // base case if left is greater than right
  if (left > right) {
    return -1;
  }
  // have mid pt as floor of avg of left and right pointers
  let midpt = Math.floor((left + right) / 2);
  // check midpt if it is the target return idx if it is
  if (arr[midpt] === target) return midpt;
  // if midpt value is greater than target, you know you want the left half
  if (arr[midpt] > target) {
    return recursiveBinarySearch(arr, target, left, midpt - 1);
  } else {
    // if midpt value is less than target you want the right half
    return recursiveBinarySearch(arr, target, midpt + 1, right);
  }
}

function binarySearch(arr, target) {
  // use 2 pointers
  // two for the frame you are looking for
  let left = 0;
  let right = arr.length - 1;
  // use a while loop to keep looping until something happens
  // WHY is this is case?
  while (right >= left) {
    // midpt value is floor of avg of left and right
    let midpt = Math.floor((left + right) / 2);
    if (arr[midpt] === target) return midpt;
    // if midpt value is less than target you can elminate the left half of arr
    // since it is a sorted array
    if (arr[midpt] < target) {
      left = midpt + 1;
    } else {
      right = midpt - 1;
    }
  }
  return -1;
}

// not logn time.
// will need to compare to first item in list to find pivot
function findPivot(arr) {
  // logic is similar to binary search but instead you are only
  // moving one number up or down at a time?
  // pivot is where the current number is greater than the next number
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let pivotIdx = Math.floor((left + right) / 2);
    if (arr[pivotIdx] > arr[pivotIdx + 1]) {
      return pivotIdx;
    } else if (arr[pivotIdx] < arr[pivotIdx + 1]) {
      left = pivotIdx + 1;
    }
  }
}

console.log(findPivot(arrRotated)); // should return index 3
console.log(findPivot(arrRotated2)); // should return index 4

findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16); // 5

// console.log(recursiveBinarySearch(arr1, 6));
// console.log(recursiveBinarySearch(arr1, 1));
// console.log(recursiveBinarySearch(arr1, 10));
// console.log(recursiveBinarySearch(arr1, 19));

// console.log(binarySearch(arr1, 6));
// console.log(binarySearch(arr1, 1));
// console.log(binarySearch(arr1, 10));
// console.log(binarySearch(arr1, 19));
