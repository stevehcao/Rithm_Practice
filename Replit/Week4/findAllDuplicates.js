// Instructions from your teacher:
// Description
// Given an array of positive integers, some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Note that you can return the elements in any order.

function findAllDuplicates(arr) {
  // counter
  // ans
  let ans = [];
  // freq counter
  // loop through obj/map add to counter if value is 2
  let obj = arr.reduce((obj, num, i, arr) => {
    console.log(obj, num);
    obj[num] ? ++obj[num] : obj[num] = 1;
    return obj;
  }, {});

  // loop over obj and find which key has a value of 2 and push to arr
  for (let key in obj) {
    obj[key] === 2 ? ans.push(+key) : null;
    // or just a simple if statement
    // if (obj[key] === 2) ans.push(+key)
  }
  return ans;
}

// MODEL
/**
 * If the number hasn't been seen before, add it to the set.
 *  If the number is in the set, add it to the result.
 */
function MODELfindAllDuplicates(nums) {
  let result = [];
  let seen = new Set();

  for (let n of nums) {
    if (seen.has(n)) result.push(n);
    else seen.add(n);
  }
  return result;
}

// example of freq counter
// let counter = str => {
//   return str.split('').reduce((total, letter) => {
//     total[letter] ? total[letter]++ : total[letter] = 1;
//     return total;
//   }, {});
// };

// Examples
//findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // [2, 3]

//findAllDuplicates([4, 3, 2, 1, 0]); // []

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // [3, 2, 1]

// Constraints
// Time Complexity - O(n)
