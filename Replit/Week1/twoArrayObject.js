// Description
// Write a function called twoArrayObject which accepts two arrays of varying lengths.

// The first array consists of keys and the second one consists of values.

// Your function should return an object created from the keys and values.

// If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

// inputs: array, array
// outputs: object
// varying lengths of arrays
// edge cases: if not enough keys then ignore the rest
// if not enough values then replace with null

function twoArrayObject(keys, values) {
  // create new obj
  let obj = {};
  // loop through keys
  for (let i = 0; i < keys.length; i++) {
    // set key and values
    // if values is undefine set as null

    obj[keys[i]] = values[i] || null;
    // if (values[i] === undefined) {
    //   obj[keys[i]] = null;
    // } else {
    //   obj[keys[i]] = values[i];
    // }
  }
  return obj;
}

function hofTwoArrObj(keys, values) {
  return keys.reduce((curr, next, i, arr) => {
    curr[next] = values[i] || null;
    // always return the curr in reduce
    return curr;
  }, {});
}

// Examples
twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
//console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': null}

console.log(hofTwoArrObj(['a', 'b', 'c'], [1, 2, 3, 4]), 'HOF!!!'); // {'a': 1, 'b': 2, 'c': 3}
console.log(hofTwoArrObj(['x', 'y', 'z'], [1, 2]), 'HOF!!!'); // {'x': 1, 'y': 2, 'z': null}
console.log(hofTwoArrObj(['a', 'b', 'c', 'd'], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
