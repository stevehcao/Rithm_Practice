// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
  // base case
  if (arr.length === 0) return false;
  // check callback value if it's true then return true
  if (cb(arr[0])) return true;
  // recursion to iterate through the rest of the array
  return someRecursive(arr.slice(1), cb);
}
