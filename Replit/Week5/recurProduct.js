// Write a function that, given an array, returns the product (result of multiplication) of an array.

// It should do this with recursion, not using a loop or reduce.

function prod(arr) {
  // base case
  if (arr.length === 0) return 1;

  // call the function
  return arr[0] * prod(arr.slice(1));
}
// 
// 1 * prod ([2, 3, 4]), 1 * 24
// 2 * prod ([3, 4]), 2 * 12 = 24
// 3 * prod ([4]), 3 * 4 = 12
// 4 * prod ([]), this hits base case so it will return 1 * 4 and pop off 

/**
 * need to finish
 * @param {Integer} nums 
 */
function newProd(nums) {
  let prod = 1;
  function _newProd(nums) {
    // use closure
    
  }
  // 
}

console.log(prod([1, 2, 3, 4]))    //  24
console.log(prod([1, 2, 0]))       // 0