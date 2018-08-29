// Write a function anagramPalindrome which accepts a word, and returns true or false if there exists 
// some anagram of that word that is a palindrome.

// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam 
// or nurses run.

// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
// formed from iceman.

// Time complexity required: O(n) [where n is length of string]

// input: string
// output: boolean
// constraints: listed above
// edge cases: input is not valid or empty string
// find a method in order to check when string is palindrome
// if string has one char === true
// freq counter and check if there is one pivot point and every other number are even

function anagramPalindrome(str) {
  if (str.length === 1) return true;
  let strArr = str.split('');
  // freq counter
  let counter = strArr.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {}) 
  // iterate through counter and if number is not 1 and odd return false
  for (let key in counter) {
    if (counter[key] !== 1 && counter[key] % 2 !== 0) {
      return false;
    }
  }
  // return true
  return true;
}

console.log(anagramPalindrome("carrace")); // true (racecar)

anagramPalindrome("bba"); // true (bab)

anagramPalindrome("e"); // true (e)

console.log(anagramPalindrome("zzzaaa")); // false

console.log(anagramPalindrome("cattaco")); // true (tacocat)

console.log(anagramPalindrome("jjqqqjjx")); // false