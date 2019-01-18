/**
 * write a function called findLongestSubstring accepts a string and returns the length of the longest substring with
 * all distinct characters
 */

function findLongestSubstring(str) {
  // empty str return 0
  if (str.length === 0) return 0;
  // have a sliding window made of two pointers
  let left = 0;
  let right = 0;
  // set
  let currStr = new Set();
  // longest substring length
  let maxSubstr = 0;
  // iterate string
  while (left < str.length && right < str.length) {
    // if not in set
    if (!currStr.has(str[right])) {
      // put in set
      currStr.add(str[right]);
      // extend window length
      right++;
      // if char is in set
    } else if (currStr.has(str[right])) {
      // remove left side of window from set
      currStr.delete(str[left]);
      // move window
      left++;
    }
    // check length and compare to max length
    maxSubstr = Math.max(right - left, maxSubstr);
    console.log(currStr);
  }
  // return max length
  return maxSubstr;
}

// console.log(findLongestSubstring('')); // 0;
// console.log(findLongestSubstring('rithmschool')); // 7;
// console.log(findLongestSubstring('thisisawesome')); // 6;
// console.log(findLongestSubstring('longestsubstring')); // 8;

function MODELfindLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    // console.log(seen);
    console.log(start);
  }
  return longest;
}

console.log(MODELfindLongestSubstring('longestsubstring')); // 8;
