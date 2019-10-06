// highest number will bubble to the end of the list/array
// to optimize try to shrink the array that you compare

function bubbleSortUnoptimized(arr) {
  // two loops
  // compare next number if current number is higher then swap
  // return sorted arr
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        swapES6(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function bubbleSortOptimized(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swapES6(arr, j, j + 1);
      }
    }
    console.log('ONE PASS COMPLETE!');
  }
  return arr;
}

// if you don't swap then you know that array is already sorted
function bubbleSortSuperOptimized(arr) {
  var noSwaps = true;
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swapES6(arr, j, j + 1);
        // if there is a swap change flag
        noSwaps = false;
      }
    }
    console.log('ONE PASS COMPLETE!');
    if (noSwaps) break;
  }
  return arr;
}

// swap helper functions
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES6
function swapES6(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// console.log(bubbleSortUnoptimized([37, 45, 29, 8]));
// console.log(bubbleSortOptimized([37, 45, 29, 8, -3]));
// console.log(bubbleSortSuperOptimized([37, 45, 29, 8, -3]));
console.log(bubbleSortSuperOptimized([8, 1, 2, 3, 6]));
