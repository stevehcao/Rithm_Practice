/**
 * accepts an array and a value
 * loop through the array and check if the current array element is equal to the value passed in
 * if it is then return index
 * if value is never found return -1
 * @param {Array} arr
 * @param {Number || String} val
 */
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 'hello', 5], 5));
console.log(linearSearch([1, 2, 'hello', 5], 6));
