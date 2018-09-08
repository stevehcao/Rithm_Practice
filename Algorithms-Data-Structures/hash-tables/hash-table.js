// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

function isAnagram(s, t) {
  // put strings into objects or hash tables? new map?
  // iterate through s and map letters to hash table and count how many
  // check if length not equal
  if (t.length !== s.length) return false;

  let tableS = {};
  let tableT = {};
  for (let char of s) {
    if (tableS[char]) {
      tableS[char]++;
    } else {
      tableS[char] = 1;
    }
  }

  // iterate through t and make count as well, match count
  for (let char of t) {
    if (tableT[char]) {
      tableT[char]++;
    } else {
      tableT[char] = 1;
    }
  }

  for (let key in tableT) {
    if (tableT[key] !== tableS[key]) {
      return false;
    }
  }
  return true;
}

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'a'));

