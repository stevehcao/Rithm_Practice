// implement a function that accepts sorted array, counts the uniq values in the array
// there can be negative numbers in array, but it will always be sorted

function countUniqueValues(arr) {
  // have two pointers for arr
  if (arr.length === 0) return 0;
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    // when two values are unique!
    // move left pointer up and turn it into whatever is at right pointer
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

console.log(countUniqueValues([5, 2, 2, 3])); //3

// put in set and see?
function countUniq(arr) {
  // set
  // iterate and put in set
  // return set length
  let newSet = new Set();

  if (arr.length === 0) return 0;
  for (let num of arr) {
    newSet.add(num);
  }
  return newSet.size;
}

console.log(countUniq([5, 2, 2, 3])); // 3
