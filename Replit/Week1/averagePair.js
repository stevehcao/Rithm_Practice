// Description

// Write a function called averagePair that accepts a sorted array of integers and a target average number.
// Determine if there is a pair of values in the array whose average equals the target.

// There may be more than one pair that matches the average target, but you simply have to return true
// if there is a match and false otherwise.

// Bonus Constraints

// Time Complexity: O(N)
// Space Complexity: O(1)

/**
 * how do I use jsdoc? haha
 * it should accept a sorted arrays of integers and a target avg number
 * it should determine if there is a pair of values in the arr whose avg equals the target
 * may be more than one pair that matches the average target but only have to return true or false
 */

// input: arr
// output boolean
// assume: array is sorted arr of integers
// space is O(1) so constant space can't create another data structure
// time constrant is O(n),

function averagePair(arr, target) {
  // use two pointers
  // similar strategy to binary search
  // where you can decide on where to move pointers depending on conditional logic
  let left = 0;
  let right = arr.length - 1;
  // iterate through array
  while (right > left) {
    let min = arr[left];
    let max = arr[right];
    let avg = (min + max) / 2;
    console.log('avg', avg);
    if (avg === target) return true;

    if (avg < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true, because (2 + 3)/2 === 2.5

// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true

// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false

// averagePair([], 4); // false
