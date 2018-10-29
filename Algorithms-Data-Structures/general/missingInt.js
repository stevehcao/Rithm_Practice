// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// given an array find the smallest positive integer that does NOT occur in the array
function findInt(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // find max number in array
  // if number is negative return 1
  // if number - 1 is NOT in array
  // OR sort and then increment
  let max = Math.max(...A);
  let min = Math.min(...A);

  if (max <= 0) return 1;
  if (max === 1) return 2;

  A.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < A.length; i++) {
    if (A[i] + 1 !== A[i + 1]) {
      return A[i] + 1;
    }
  }

  // if (max <= 0) return 1;
  // if (A.indexOf(max - 1) < 0 && max !== 1) {
  //     return max - 1;
  // } else {
  //     return max + 1;
  // }
}

console.log(findInt([1, 2, 3]));
console.log(findInt([-1, -3]));
console.log(findInt([1, 3, 4, 5]));
console.log(findInt([3, 4, 5]));
