// Description
// Write a function called mergeSortedArrays which accepts two sorted arrays and returns
// a new array with the combined values from each array, also sorted.

// This function should run in O(n + m) time and O(n + m) space
// and should not modify the arrays passed to it. It should also not use the built-in sort method!

// to merge a sorted array do NOT modify arr
function ATTEMPTmergeSortedArrays(arr1, arr2) {
  // concat arrays or spread to merge unsorted arrays
  // but will not mutate original arrays
  let spread = [...arr1, ...arr2]; // [1, 3, 4, 5, 2, 4, 6, 8]
  //
}

/**
 * Use two pointers i for arr1 and j for arr2.
 *  In the first while loop, push the smaller value
 *  from each array until we reach the end of one of them.
 *
 *  The final two while loops are to handle the case where
 *   the arrays are different length. Keep pushing from the
 *   longer array into the resulting array.
 */

// function MODELmergeSortedArrays(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   // first loop, push the smaller value of the two pointers
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   // if arr1 was longer, push the rest of arr1
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   // if arr2 was longer, push the rest of arr2
//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

function mergeSortedArrays(arr1, arr2) {
  let ans = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      ans.push(arr1[left]);
      left++;
    } else {
      ans.push(arr2[right]);
      right++;
    }
  }
  // these while loops are to handle arrays of diff lengths
  while (left < arr1.length) {
    ans.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    ans.push(arr2[right]);
    right++;
  }
  return ans;
}

// Examples
var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(arr1, arr2)); // [1,2,3,4,4,5,6,8]

arr1; // still [1,3,4,5];
arr2; // still [2,4,6,8];

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

//mergeSortedArrays(arr3, arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

arr3; // still [-2,-1,0,4,5,6];
arr4; // still [-3,-2,-1,2,3,5,7,8];

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

//mergeSortedArrays(arr5, arr6); // [1,2,3,4,5]

// Constraints
// Time: O(n + m)
// Space O(n + m)
