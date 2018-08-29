/** Validate that a given square is valid.

Checks that this is either a simple square (``0`` or ``1``), or
a split square (a list of 4 items, each being a simple square or
a split square).

A simple square is valid::

    >>> validate(0)
    True

A split square of four simple filled squares is valid::

    >>> validate([1, 1, 1, 1])
    True

We can nest split and simple squares::

    >>> validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])
    True

    >>> validate([1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    True

Simple squares must be either 0 (empty) or 1 (filled)::

    >>> validate(2)
    False

Split squares must contain exactly four parts::

    >>> validate([1, 1, 1, 1, 1])
    False

    >>> validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])
    False

    >>> validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    False

*/

function validate(sqs) {
  // check if element is a valid square, either 1 or 0 ONLY
  if (typeof sqs === 'number') {
    if (sqs !== 1 && sqs !== 0) return false;
  } else if (sqs.length !== 4) {
    return false;
  }
  // check if element it is a split square, if so MUST BE  EXACTLY 4 parts
  // check array length? of each array recurse in order to check cd within each split square
  for (let square of sqs) {
      // need to return validate(square) or else it will just break out of loop
      if (!validate(square)) return false;
  }
  return true;
}

// console.log(validate(0)); // true
//console.log(validate([1, 1, 1, 1]))  // true
// console.log(validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1]))  // true
//console.log(validate(2)) // false
// console.log(validate([1, 1, 1, 1, 1])) // false
console.log(validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])); // false

// model joel

// .every

function validateModel(ss) {
  return (
    ss === 0 ||
    ss === 1 ||
    (Array.isArray(ss) && ss.length === 4 && ss.every(validateModel))
  );
}
