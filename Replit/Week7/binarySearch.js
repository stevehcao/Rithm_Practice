// a function that runs in O(log)N times
// computers are binary meaning they are log 2 based because runs with 0 and 1 only.

// input: arr, num
// output: num
// assume sorted array
// assume only numbers
let arr1 = [1, 2, 3, 4, 5, 6, 7];

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // left and right are preset
  // have a while loop that as long as left and right do not intersect
  while (right >= left) {
    // guess is the midpt of array and will change every iteration
    let guessIdx = Math.floor((left + right) / 2);
    if (arr[guessIdx] === target) {
      return guessIdx;
    }
    // if target is less than guess then can discount left half of array
    if (arr[guessIdx] < target) {
      left = guessIdx + 1;
    } else {
      right = guessIdx - 1;
    }
    // change left and right to match condition
  }
  return -1;
}

console.log(binarySearch(arr1, 6));
console.log(binarySearch(arr1, 1));
console.log(binarySearch(arr1, 10));
console.log(binarySearch(arr1, 19));

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  // base case
  if (left > right) return -1;

  let guessIdx = Math.floor((left + right) / 2);
  if (arr[guessIdx] === target) return guessIdx; // ideal case
  if (arr[guessIdx] > target) {
    return recursiveBinarySearch(arr, target, left, guessIdx - 1);
  } else {
    return recursiveBinarySearch(arr, target, guessIdx + 1, right);
  }
}

console.log(recursiveBinarySearch(arr1, 6));
console.log(recursiveBinarySearch(arr1, 1));
console.log(recursiveBinarySearch(arr1, 10));
console.log(recursiveBinarySearch(arr1, 19));
