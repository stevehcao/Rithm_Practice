// Description

// Implement a function called, areThereDuplicatese which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Examples

// input: variable number of arguments ( can be numbers or strings)
// output: boolean
// assume: no objects or arrays are passed in, (bonus if they are will need to use recursion)
// it should check passed in arguments for duplicates
// if there ARE duplicates then return TRUE;

function areThereDuplicates(...args) {
  // use rest operator to put ALL args into an array named args, it could be named anything
  // will rest operator take up space?
  let set = new Set(args);
  return set.size !== args.length;
  // iterate args and put it into a set and compare length of set and args
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// Constraints
// Time - O(n)
// Space - O(n)

// Bonus Constraints
// Time - O(n log n)
// Space - O(1)

/**
 * Sort the arguments array, then see if any element is
 *  equal to the previous element
 * O(nlgn) time complexity
 * O(1) space complexity
 */
function areThereDuplicatesBonus(...args) {
  /**
   * A comparator function that can sort
   *  strings or numbers
   */
  function compare(a, b) {
    if (typeof a === 'string') {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    } else {
      return a - b;
    }
  }

  args.sort(compare);

  for (let i = 1; i < args.length; i++) {
    if (args[i] === args[i - 1]) {
      return true;
    }
  }
  return false;
}
