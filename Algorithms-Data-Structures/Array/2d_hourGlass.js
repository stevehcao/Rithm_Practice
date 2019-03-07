// Function Description

// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

// hourglassSum has the following parameter(s):

// arr: an array of integers
// Input Format

// Each of the  lines of inputs  contains  space-separated integers .

// Constraints

// Output Format

// Print the largest (maximum) hourglass sum found in .

function hourGlass(arr) {
  // we could set this to 3 given the problems constraints, but this allows changes
  let maxX = 3; // + (arr[0].length % 3)
  let maxY = 3; // + (arr.length % 3)
  let total = -Infinity; // has to be -64, but

  // begin at y == 0
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      // sum the top of hourglass
      let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];

      // get the middle of hourglass
      sum += arr[y + 1][x + 1];

      // sum the bottom of hourglass
      sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];

      // don't store result to keep space complexity down
      if (total < sum) total = sum;
    }
  }

  return total;
}
