
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringNONWORKING = function(s) {
  // store current length
  // max length of sub
  // hash of substring
  // iterate over string
    // if char does not exist add to hash
    // add count
    // if does exist
    // math max of curr leng vs max leng
    // reset hash
  // return max leng
  // NEED to add two pointers/ sliding window
  let currLeng = 0;
  let maxLeng = 0;
  let hash = {};
  
  for (let char of s) {
      console.log(char);
      if (!hash[char]) {
        hash[char] = true;
        ++currLeng;
        console.log(currLeng, 'NOW');
      } else {
          maxLeng = Math.max(currLeng, maxLeng);
          currLeng = 0;
          hash = {};
      }
  }
  return Math.max(currLeng, maxLeng);
};

function lengthOfLongestSubstring1(str) {
  let left = 0;
  let right = 0;

  let currLeng = 0;
  let maxLeng = 0;
  let hash = {};
  
  while (left && right < str.length) {
      console.log(char);
      if (!hash[char]) {
        hash[char] = true;
        ++currLeng;
        console.log(currLeng, 'NOW');
      } else {
          maxLeng = Math.max(currLeng, maxLeng);
          currLeng = 0;
          hash = {};
      }
  }
  return Math.max(currLeng, maxLeng);
}

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring1('aab')); // 2


// MODEL
// object kept track where you start

/**
 * Given a string, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringMODEL(s) {
  let set = new Set();
  let longest = 0;

  let left = 0; // left points to the beginning of the current unique substring
  let right = 0; // right points to the end of the current unique substring

  while (left < s.length && right < s.length) {
    if (!set.has(s[right])) {
      // if we have not seen the end character before, add it to the set,
      //   increment right pointer, and get the longest
      set.add(s[right]);
      right++;
      longest = Math.max(longest, right - left);
    } else {
      // if we have seen the end character before, increment left while deleting from the set until
      //  the character on the right has not been seen before
      set.delete(s[left]);
      left++;
    }
  }

  return longest;
}

/**
 * Given a string, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringMODEL2(s) {
  let hashMap = new Map();
  let longest = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (hashMap.get(s[right])) {
      // left pointer is either the previously saved index of the current char or the current index, whichever is greater
      left = Math.max(hashMap.get(s[right]), left);
    }
    // longest is max of its current value or the length of the window (+1 because zero-based indexing)
    longest = Math.max(longest, right - left + 1);
    // save the index of the character following the current character
    hashMap.set(s[right], right + 1);
  }

  return longest;
}

// assume valid input, strings only
// looking for longest substring non repeating
function lengthOfLongestSubstring(str) {
  // keep track of length of max length;
  // make a hash can use Set, built in .add(), .delete(), .has()
  // make use of two pointers
  // iterate over string
    // check if character is not in hash
    // add to hash
    // move right pointer
    // determine max length
    // if it is in hash
    // delete from hash
    // move left pointer
  let maxLeng = 0;
  let left = 0;
  let right = 0;
  let hash = new Set();

  while (left < str.length && right < str.length) {
    if (!hash.has(str[right])) {
      hash.add(str[right]);
      right++;
      maxLeng = Math.max(maxLeng, (right - left));
    } else {
      hash.delete(str[left]);
      left++;
    }
  }
  return maxLeng;
}