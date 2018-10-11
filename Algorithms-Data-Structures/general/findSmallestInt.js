// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// given an array find the smallest positive integer that does NOT occur in the array
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// given an array find the smallest positive integer that does NOT occur in the array
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // find max number in array
  // if number is negative return 1
  // if number - 1 is NOT in array
  // OR sort
  let max = Math.max(...A);
  let min = Math.min(...A);

  if (max <= 0) return 1;
  if (A.indexOf(max - 1) < 0 && max !== 1) {
    return max - 1;
  } else {
    return max + 1;
  }
  // for (let i = 0; i < A.length; i++) {

  // }
  // // subtract max by 1 and check if it's there
  // while (max) {
  //     max--;
  //     if (A.indexOf(max) < 0) {
  //         return max;
  //     }
  // }
}
