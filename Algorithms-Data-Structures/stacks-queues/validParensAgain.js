function validParens(str) {
  // hash table to check if valid
  let hash = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  // use a stack
  let stack = [];
  for (let paren of str) {
    // open paren will push to stack
    // console.log(paren);
    if (paren === '(' || paren === '{' || paren === '[') {
      stack.push(paren);
    } else {
      // check close paren if it matches the last open paren
      let lastOpenParen = stack.pop();
      if (lastOpenParen !== hash[paren]) {
        return false;
      }
    }
  }
  return true;
}

console.log(validParens('{[]}')); // true
console.log(validParens('([)]')); // false
