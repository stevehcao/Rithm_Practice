/**
 * Roughly O^2 time complexity for worst case
 * if nearly sorted then O^n
 *
 * @param {Array} arr
 * sort an array, let largest value bubble to the top
 * optimized to take into account that you don't have to compare the last few items
 * because as you go you will have a sorted array.
 * will need to account for an already sorted array! nearly sorted
 */
function bubbleOptimized(arr) {
  // loop towards the beginning of array? backward iteration
  // have an inner loop with variable called j from the beginning until i-1
  // if j is greater than j+1 swap values
  // return sorted array
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // es6 swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // change flag to false
        noSwaps = false;
      }
    }
    // if you didn't swap then you will not need to swap in the future
    // break out of loop
    if (noSwaps) break;
  }
  return arr;
}

// not optimized because it will check EVERY iteration
// even though you won't need to check the end
function bubbleSLOW(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // es6 swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // old swap
        // var temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = arr[j];
      }
    }
  }
  return arr;
}

console.log(bubbleSLOW([2, 3, 5, 1]));
console.log(bubbleOptimized([2, 3, 5, 1]));
