// Description

// Write a function called constructNote that accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M + N)
// Space Complexity: O(N)

/**
 * input: string, string
 * output: boolean
 * assume: inputs will always be lowercase letters with no space or special characters
 *
 * it should return true if the msg strings can be built with the letters
 * it should return false if otherwise
 *
 * you can build two diff objects and check if keys and values match
 *
 * try to build a map?  map: .has .set .get?
 */
// working solution similar to model solution

function constructNote(msg, letters) {
  // build two diff objects
  let msgObj = {};
  let lettersObj = {};
  // freq counter for both
  for (let val of msg) {
    msgObj[val] ? ++msgObj[val] : (msgObj[val] = 1);
  }

  for (let val of letters) {
    lettersObj[val] ? ++lettersObj[val] : (lettersObj[val] = 1);
  }
  console.log(msgObj);
  // loop in one object and compare keys and values
  for (let letter in msgObj) {
    if (!lettersObj.hasOwnProperty(letter)) {
      return false;
    }
    if (msgObj[letter] > lettersObj[letter]) {
      return false;
    }
  }
  return true;
}

//refactored with Map
// a new Map() is similar to a new Obj
// key differences
// 1) order is guranteed
// 2) can take numbers as keys
// can use almost anything as keys
// main methods: .set(), .get(), .has()

// function constructNote(msg, letters) {
//   let msgMap = new Map();
//   let letMap = new Map();
//   msgMap.set('a', 1);
//   msgMap.set('a');
//   //msgMap.set('key', msg);
//   for (let val of msg) {
//     if (!msgMap.has(val)) {
//       msgMap.set(val, 1);
//     } else {
//       msgMap.set(val, val++);
//     }
//   }

//   console.log(msgMap);
//   console.log(msgMap.get('key'));
//   console.log(msgMap.has('key1'));
// }

// Examples

console.log(constructNote('aa', 'abc')); // false

console.log(constructNote('abc', 'dcba')); // true

//console.log(constructNote('aabbcc', 'bcabcaddff')); // true
