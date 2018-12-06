/* Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

function longestPalindrome(str) {
  let max = 0;
  let currStr = '';
  let left = 0;
  let right = 1;
}

function isPalindrome(str) {
  const reversedStr = str
    .split('')
    .reverse()
    .join('');
  return reversedStr === str;
}

console.log(isPalindrome('tacocat'));
