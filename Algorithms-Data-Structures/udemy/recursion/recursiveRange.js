// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21, 6 + 5 + 4 + 3 + 2 + 1
// recursiveRange(10) // 35

/* Write a function called recursiveRange
accepts a number and adds up all the numbers from 0 to the number passed into the function
*/

function recursiveRange(num) {
  // base case
  if (num === 1) return 1;
  // recurse
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
