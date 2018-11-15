// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

function validParen(str) {
  // make an hash to check
  const check = { ')': '(', '}': '{', ']': '[' };
  let stack = [];
  // iterate through string
  for (let paren of str) {
    // if closing bracket
    if (check[paren]) {
      // pop stack to check against closing bracket
      let topOpenParen = stack.pop(); // will be the open bracket you need to check for
      if (check[paren] !== topOpenParen) return false;
    } else {
      stack.push(paren);
    }
  }
  // will check for odd counts // '['
  if (stack.length) return false;

  return true;
}

console.log(validParen('()[]{}')); // true
console.log(validParen('([)]')); // false

// if string all the same type ()
function validOne(str) {
  let left = 0;
  // iterate through string and have counter
  // if ( then add if ) then subtract to counter
  // if by the end you are not 0 then not valid paren
  for (let paren of str) {
    if (paren === '(') {
      left++;
    } else {
      left--;
    }
  }
  return left === 0;
}

// console.log(validOne('()')); // true;
// console.log(validOne('())')); // false;
// console.log(validOne('((()(())))')); // true;

// old
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // make a stack? FILO
  // loop through string and add to stack
  // take out of stack in order? how to keep track of order?
  let stack = [];
  let i = 0;
  let obj = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  // loop over string
  while (i < s.length) {
    // if string is an open bracket
    let currentOpen;
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    }
    if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      currentOpen = stack.pop();
      if (currentOpen !== obj[s[i]]) return false;
    }

    i++;
  }
  if (stack.length) return false;
  return true;
};
