// In this exercise, you'll build a "polish notation calculator".

// Polish notation is a different way to write an artithmetic expression. 
// For example, instead of writing "1 + 2 * 3", as we would in normal ("infix") style, we could write 
// it with the operators to the left of their arguments. This expression would become "+ 1 * 2 3". 

// You can read a polish notation expression backwards to see exactly what it does --- in this case, multiply 2 times 3, 
// then add that result to 1.

// Your function will be given a string which contains space-separated positive integers and operators (+, -, *, and /), 
// like "+ 1 2". It should return the value of the expression.

// Some tests (along with how this expression would be written in infix style, to help you understand this format of expressions):
// input: string
// output: number
// constraints: none
// edge cases: if passed in nothing or something that is not a string
// turn string into an array with no spaces, iterate through backwards to figure out what to do with the numbers
// assume there is only 3 numbers max

function calc(str) {
  let arrNum = str.split(' ');
  let op2 = +arrNum.pop();
  // iterate through array backwards, use a while loop
  while (arrNum.length > 0) {
    // first two numbers guranteeed so check 3rd from last operator to determine condition
    let op1 = +arrNum.pop();
    let operator = arrNum.pop()
    // use conditionals to determine what to do with numbers
    if (operator === '+') op2 = op2 + op1;
    else if (operator === '*') op2 = op2 * op1;
    else if (operator === '-') op2 = op1 - op2;
    else if (operator === '/') op2 = op1 / op2;
  }
  return op2;
}

//calc("+ 1 2")      // 3   (same as 1 + 2)
console.log(calc("* 2 + 1 2"));  // 6   (same as 2 * (1 + 2))
//calc("+ 9 * 2 3")  // 15  (same as 9 + (2 * 3))
 
// Also make sure you have non-commutative operators (subtraction and division) working:

// calc("- 1 2")      // -1  (same as 1 - 2)
// calc("- 9 * 2 3")  // 3   (same as 9 - (2 * 3))
// calc("/ 6 - 4 2")  // 3   (same as 6 / (4 - 2))

// Hint:
// You'll want to turn the expression into an array and work through it backwards. Do this by hand and see how it feels.

function MODELcalc(s) {
  // Convert to list of tokens
  // For example: "+ 1 2" -> ["+", "1", "2"]
  const tokens = s.split(" ");

  // Start with right-most number (in a well-formed polish notation
  // expression, it must ALWAYS end with a number)
  let operand2 = +tokens.pop();

  while (tokens.length > 0) {
    // Grab the right-most number
    const operand1 = +tokens.pop();

    // Grab the right-most operand
    const operator = tokens.pop();

    // Do the math and use the result as our "right-hand" value
    // for the next time we do math

    if (operator === "+") operand2 = operand1 + operand2;
    else if (operator === "-") operand2 = operand1 - operand2;
    else if (operator === "*") operand2 = operand1 * operand2;
    else if (operator === "/") operand2 = operand1 / operand2;
  }

  // The final result is the result of the most recent operation

  return operand2;
}