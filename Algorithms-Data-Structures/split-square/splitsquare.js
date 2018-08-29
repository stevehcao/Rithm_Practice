function dump(s) {
  if (s === 0 || s === 1) {
    return s.toString();
  } else {
    // Array.map(fn) - return new array of [fn(item1), fn(item2), ...]
    return s.map(dump).join(' ');
  }
}

function dumpNormal(ss) {
  // unknown base case!
  if (ss === 1 || ss === 0) {
    console.log(ss);
  } else {
    // iterate through array
    for (let square of ss) {
      // if is an array then recurse
      dump(square);
    }
  }
}

//dump([0, 1, 0, 1])
// dump([0, 0, 0, [1, 1, 1, 1]]);
dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]]);

function is_valid1(sqs) {
  // check if element is a valid square, either 1 or 0 ONLY
  if (typeof sqs === 'number') {
    return sqs == 1 || sqs == 0;
  }

  if (sqs.length !== 4 || typeof sqs !== 'number' || !Array.isArray(sqs)) {
    return false;
  }
  // check if element it is a split square, if so MUST BE  EXACTLY 4 parts
  // check array length? of each array recurse in order to check cd within each split square
  for (let square of sqs) {
    // need to return validate(square) or else it will just break out of loop
    if (!is_valid(square)) return false;
  }
  return true;
}

function is_valid2(ss) {
  // check if ss is an array and of valid length
  // check if ss is 1 or 0
  return (
    ss === 1 ||
    ss === 0 ||
    (Array.isArray(ss) && ss.length === 4 && ss.every(is_valid))
  );
}

function is_valid(ss) {
  if (Array.isArray(ss) && ss.length === 4) {
    // if it enters this block it is a valid array with valid length
    return ss.every(square => is_valid(square));
  }
  return ss === 1 || ss === 0;
}

// console.log(is_valid(0)); // true
// console.log(is_valid([1, 1, 1, 1]))  // true
// console.log(is_valid([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1]))  // true
//console.log(is_valid(2)) // false
// console.log(is_valid([1, 1, 1, 1, 1])) // false
//console.log(is_valid([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])); // false

function simplifyOld(ss) {
  // does nothing to numbers/a simple square
  if (typeof ss === 'number') return ss;
  // does not simplify non-matching arrays
  // loop over EVERY element and check if they are a given condition, in this case square element === 1
  // should simplify matching arrays [1, 1, 1, 1] ==> 1
  if (ss.every(square => square === 1)) {
    return 1;
  } else if (ss.every(square => square === 0)) {
    return 0;
  } else {
    return ss;
  }
  // should handle nesting, use recursion to check if is an array
  if (Array.isArray(ss)) {
    simplify(ss);
  }
}

function simplifyModel(s) {
  if (s === 0 || s === 1) {
    return s;
  }

  var q1 = simplifyModel(s[0]);
  var q2 = simplifyModel(s[1]);
  var q3 = simplifyModel(s[2]);
  var q4 = simplifyModel(s[3]);

  if (Number.isInteger(q1) && q1 === q2 && q1 === q3 && q1 === q4) {
    return q1;
  }

  return s;
}

function simplify(s) {
  // check if square is either 1 or 0 and return that
  if (s === 0 || s === 1) {
      return s;
  }
  // recursion through each quadrant
  // assume that all inputs are valid squares
  var q1 = simplify(s[0]);
  var q2 = simplify(s[1]);
  var q3 = simplify(s[2]);
  var q4 = simplify(s[3]);

  // check if all are equal to the first quad, if so return only q1 value
  if (Number.isInteger(q1) && (q1 === q2) && (q1 === q3) && (q1 === q4)) {
      return q1;
  }
  // return square
  return s;
}
