class Stack {
  constructor() {
    this._array = [];
  }

  size() {
    return this._array.length;
  }

  push(val) {
    this._array.push(val);
  }

  pop() {
    return this._array.pop();
  }

  peak() {
    return this._array[this._array.length - 1];
  }
}

// first person in the line can either be head or tail just depends on how you want to do it
class Queues {
  constructor() {
    this._array = [];
  }

  size() {
    return this._array.length;
  }

  // adding to the opposite end of the first person
  enqueue(val) {
    this._array.unshift(val);
  }
  // removing the first item
  dequeue() {
    return this._array.pop();
  }

  peak() {
    return this._array[this._array.length - 1];
  }
}

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

/**
 * @param {string} s
 * @return {boolean}
 */
// input: string
// output: boolean
// if using a stack or queue how to solve?


var isValid = function(s) {
  // make a stack? FILO
  // loop through string and add to stack
  // take out of stack in order? how to keep track of order?
  let stack = [];
  let i = 0;
  let obj = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  }
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


// Implement a basic calculator to evaluate a simple expression string.

// The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

// Example 1:

// Input: "1 + 1"
// Output: 2
// Example 2:

// Input: " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: "(1+(4+5+2)-3)+(6+8)"
// Output: 23
// Note:
// You may assume that the given expression is always valid.
// Do not use the eval built-in library function.

/**
 * @param {string} s
 * @return {number}
 */
// input: STRING
// output: integer
// if not () or + or - or ' ' (space) then turn into integer

var calculate = function(s) {
  var math = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y }
  }
  
  let stack = [];
  // iterate through string
  // if is # then turn into integer
  // need to have variables to popped?
  // compute once you have all 3 variables left, right, operation
  let operation;
  let left;
  let right;
  
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if ((el !== '+' && el !==  '-' && el !== '(' && el !== ')' && el !== ' ') && left === undefined) {
      left = +el;
    } else if (el === '+' || el === '-') {
      operation = el;
    } else if ((el !== '(' && el !== ')' && el !== ' ')) {
      right = +el;
      left = math[operation](left, right);
    } else if (el === '(') {
      if (left === undefined) {
        left = calculate(s.slice(i+1));
        // console.log(left, "INSIDE");
      } else {
        right = calculate(s.slice(i+1));
      }
    } else if (el === ')') {
      return left;
    }
  }
  return left
};

console.log(calculate('(1+(4+5+2)-3)+(6+8)'));