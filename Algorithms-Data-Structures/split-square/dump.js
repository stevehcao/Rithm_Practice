function dump(arr) {
  // unknown base case!
  // iterate through array
  for (let square of arr) {
    // if is an array then recurse
    if (Array.isArray(square)) {
      dump(square);
    } else {
      // else print number out
      console.log(square);
    }
  }
}

function dump2(ss) {
  // if # and print it
  if (Number.isNumber(ss)) console.log(ss);
  // otherwise for each items dmp
}

// dump([0, 1, 0, 1])
// dump([0, 0, 0, [1, 1, 1, 1]]);
dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])
