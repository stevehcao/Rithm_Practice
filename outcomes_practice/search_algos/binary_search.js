/**
 * assume that array is only sorted numbers for now
 * left and right pointer at the beg and end of array
 * middle pointer
 * while left pointer comes before the right pointer:
 *  create a middle pointer
 *  if you find the value return idx
 *  if value is too small, move the left pointer up
 *  if value is too big, move right pointer down
 * if no val found, return -1
 * @param {Array} arr
 * @param {Number} val
 */
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let midpt = Math.ceil((left + right) / 2);
    if (arr[midpt] === val) {
      return midpt;
    } else if (arr[midpt] < val) {
      left = midpt;
    } else {
      right = midpt;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 20)); // -1
