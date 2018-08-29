// Part I

// Write a function called almostSort which accepts an array of numbers that are sorted except
// for a single pair and returns a sorted array.

// MODEL
// input: arr
// output: same arr because space is constant O(1)
// it should return a sorted arr from an ALMOST sorted arr
// iterate through arr, check for ONE pair that is out of order
// swap the pair and return arr

function almostSortModel(arr) {
  // O(n) because you aren't looping through array twice
  // you are just continuing the loop
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      let j = i - 1;
      while (j >= 0 && arr[j] > arr[i]) {
        j--;
      }
      [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
      break;
    }
  }
  return arr;
}

// [a, b] = [b, a] to swap es2015
function almostSort(arr) {
  let left = 0;
  let right = arr.length - 1;
  let swapLeft;
  let swapRight;
  // iterate through arr
  while (left < right) {
    if (arr[left] < arr[left + 1]) {
      //console.log(left);
      left++;
    } else {
      swapLeft = left;
      left--;
    }
    if (arr[right] > arr[right - 1]) {
      //console.log(right);
      right--;
    } else {
      swapRight = right;
      right--;
    }
  }
  console.log(swapRight);
  //console.log(swapLeft);
  //swap the left and right that are not in the right order
  if ((swapLeft && swapRight) !== undefined) {
    [arr[swapLeft], arr[swapRight]] = [arr[swapRight], arr[swapLeft]];
  }
  return arr;
}

console.log(almostSort([1, 2, 3, 7, 5, 6, 4])); // [1,2,3,4,5,6,7]
// almostSort([1,2,6,4,5,3]); // [1,2,3,4,5,6]
// almostSort([-1,1,0,2]); // [-1,0,1,2]
// almostSort([2,1]); // [1,2]
// almostSort([]); // []

// Time Complexity - O(n)
// Space Complexity - O(1)

// Part II

// Given an array of distinct elements, write a function called findTriplets,
// which returns the number of triplets in array whose sum is zero.

// findTriplets([-1,0,1]) // 1
// findTriplets([5,-2,3,-1]) // 1
// findTriplets([0,-1,2,-3,1]); // 2 (0,-1,1 and -3,2,1)
// findTriplets([1,-2,0,5]); // 0
// findTriplets([0,4,2,7,5,3,-3,-2,-8,-12]); // 5

// Time Complexity - O(n^2)
