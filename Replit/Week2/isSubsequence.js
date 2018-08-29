// Write a function called isSubsequence which takes in two strings and checks whether
// the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere
// in the second string,
//without their order changing.

// Examples:

function isSubsequence(str1, str2) {
  // if first string is longer than the second == false
  if (str1.length > str2.length) return false;

  // use two pointers method
  let point1 = 0;
  let point2 = 0;
  let rebuild = '';
  // check if first letter match if it does move both pointers
  // if only one match move only one pointer
  // build string as you go along
  while (point2 < str2.length) {
    if (str1[point1] === str2[point2]) {
      //console.log(str1[point1], str2[point2]);
      rebuild = rebuild.concat(str2[point2]);
      point1++;
      point2++;
    } else {
      point2++;
    }
  }
  //console.log('string1', str1);
  console.log('rebuild', rebuild);
  return str1 === rebuild ? true : false;
}

//console.log(isSubsequence('hello', 'hello world')); // true
//console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('notasubstring', 'banana')); // false
console.log(isSubsequence('almost', 'almossssss')); // false
//console.log(isSubsequence('abc', 'acb')); // false (order matters)

// Your solution MUST have the following complexities:

// Time Complexity - O(N + M)
// Space Complexity - O(1)
