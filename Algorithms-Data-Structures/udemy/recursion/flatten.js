// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flattenHelper(arr) {
  // results
  let results = [];
  // helper method
  function _flattenHelper(arr) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        _flattenHelper(el);
      } else {
        results.push(el);
      }
    }
  }
  _flattenHelper(arr);
  // iterate over array
  // if element is an array call function again
  return results;
}

console.log(flattenHelper([[1], [2], [3]])); // [1,2,3]
console.log(flattenHelper([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
console.log(flattenHelper([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]

function flatten(arr) {
  // iterate
  let results = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      results = results.concat(flatten(el));
    } else {
      results.push(el);
    }
  }
  // check if ele is arr if it is then recurse
  return results;
}
