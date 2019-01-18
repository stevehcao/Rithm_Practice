/**
 *
 * @param {Number} num
 * iterative
 */
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

/**
 *
 * @param {Number} num
 * recursive solution
 */
function factorialRecursive(num) {
  // base case when you hit one
  if (num === 1) return 1;
  // call function with a smaller input 4 * factorial(3) etc.
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(4));
