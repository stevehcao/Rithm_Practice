// Given an array, return the largest number in the array.

// It should do this with recursion, not using a loop or reduce or Math.max.

// hold on to the largest number somehow

function largest(arr) {
  // base case
  if (arr.length === 0) return undefined;
  // recurse and hold on to that number using a variable
  // that number or the rest etc at every stack unpeeling compare
  let numToCompare = largest(arr.slice(1));
  if (numToCompare === undefined) {
    return arr[0];
  } else if (arr[0] > numToCompare) {
    return arr[0];
  } else {
    return numToCompare;
  }
}

// 1 [1, 3, 2]
// 2 [3, 2]
// 3 [2]
// 4 []

largest([]); // undefined
largest([1, 3, 2]); // 3
largest([2, 2]); // 2
