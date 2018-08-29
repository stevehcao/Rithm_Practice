// Write a function called nonRepeatSubstring which accepts a string
// and returns the longest substring where the characters in the substring
// do not repeat.

// Non-repeating characters means there are no two consecutive letters
// that are the same.

// You can assume the input string only has lowercase letters.

// Constraints:
// Time Complexity: O(N)
// Space Complexity: O(N)
// input: string
// output: string
// it should return the LONGEST nonrepeating substring
// sliding window?

// Examples

// function nonRepeatSubstring(str) {
//   // two pointers with moving both pointers
//   let left = 0;
//   let right = 1;
//   let set = new Set();
//   // max str
//   let max = '';
//   // current string
//   let current = '';
//   if (str.length <= 1) return str;
//   // iterate through string
//   while (left < str.length && right < str.length) {
//     // if not repeating then add to current string
//     // if repeating then check if current string is longer than max
//     // if longer than max then replace
//     if (str[left] !== str[right]) {
//       current += str[right];
//     }
//   }
//   // return max string
// }

/**
 * Sliding window approach, build a substring as long as
 *  the current character is NOT equal to the previous character.
 *  If the current is equal, reset the substring
 * @param {string} str
 */
function nonRepeatSubstringModel(str) {
  if (str.length <= 1) return str;
  let maxSub = str[0];
  let currSub = str[0];
  // start at the second letter and look back
  for (let i = 1; i < str.length; i++) {
    let letter = str[i];
    if (letter !== str[i - 1]) {
      // build substring
      currSub += letter;
      if (currSub.length > maxSub.length) {
        maxSub = currSub;
      }
    } else {
      currSub = str[i];
    }
  }
  return maxSub;
}

console.log(nonRepeatSubstringModel('abb')); // 'ab'

console.log(nonRepeatSubstringModel('abccde')); // 'abc'
// 'abc' and 'cde' are equally as long, however 'abc' is leftmost

console.log(nonRepeatSubstringModel('aaaabbbb')); // 'ab'
// 'ab' is the longest substring without repeati
