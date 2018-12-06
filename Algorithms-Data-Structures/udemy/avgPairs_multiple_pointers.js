/**
 * write a function called avg pair given a sorted array of integers adnd a target avg, determine if there is a pair of valies
 * in the arr where the avg pair equals target, there may be more than one pair that matches the avg target
 *
 * constraints:
 * time: O(n)
 * space: O(1)
 */

/**
 *
 * @param {Array} arr
 * @param {Number} target
 * it should return a boolean to see if there is a pair that will avg to the target
 * number
 */
function avgPairs(arr, target) {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;

  // if avg is less than move left up if not move right down
  while (left !== right) {
    let currAvg = avg(arr[left], arr[right]);
    if (currAvg === target) {
      return true;
    } else if (currAvg < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

function avg(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(avgPairs([1, 2, 3], 2.5)); // true
console.log(avgPairs([1, 3, 4, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(avgPairs([-11, -1, 3, 3], 4.1)); // false
console.log(avgPairs([], 4)); // false

// model
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
