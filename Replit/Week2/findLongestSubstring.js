// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest
// substring with all distinct characters.
// input: string
// output: number
// assume: input is lowercase string
// it should return the length of the longest substring with all distinct characters

// iterate through string and see if there's duplicates?
// maybe use set? because set has constant time lookup

function findLongestSubstring(str) {
  // use two pointers
  let left = 0;
  let right = 0;
  // have max counter
  let max = 0;
  // iterate through string and create a set
  const set = new Set();
  while (left < str.length && right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      right++;
      max = Math.max(max, right - left);
    } else {
      set.delete(str[left]);
      left++;
    }
  }
  return max;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thisisawesome'); // 6
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// findLongestSubstring('longestsubstring'); // 8
// findLongestSubstring('thisishowwedoit'); // 6

// Time Complexity - O(n)

// MODEL
/** Approach: keep of set of what's seen in this streak
 *   - Keep track of i (start of streak), j (curr pos)
 *   - When hits dup char, move start of streak to next char
 *   - Maintain longest streak seen as it goes
 *
 * Runtime: O(n)
 */

function findLongestSubstringModel(str) {
  let total = 0;
  let i = 0;
  let j = 0;
  const set = new Set();

  while (i < str.length && j < str.length) {
    if (!set.has(str[j])) {
      // not a dup, lengthen streak
      set.add(str[j++]);
      total = Math.max(total, j - i);
    } else {
      // at a new char, so reset streak & move to next i
      set.delete(str[i++]);
    }
  }
  return total;
}

// ALTERNATE SOLUTION FOLLOWS

/**
 * Approach: keep an object of { character: index + 1 } pairs.
 *  - For each iteration, check if we've seen char previously.
 *  - If so, restart substring count at index + 1.
 *  - Then, update longest based on length from current index
 *    to current start. Last, update index of char in seen.
 *
 * Runtime: O(n)
 */

function findLongestSubstring2(str) {
  const seen = new Map();
  let start = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen.has(char)) {
      start = Math.max(start, seen.get(char));
    }

    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    seen.set(char, i + 1);
  }

  return longest;
}
