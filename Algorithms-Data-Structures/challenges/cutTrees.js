function cutTrees(A) {
  // acount for empty array
  if (A.length === 0) return 0;
  // counter of possibilites
  let count = 0;
  // iterate through array
  let copy = A.slice();
  for (let i = 0; i < A.length; i++) {
    // remove each tree and hold on to the value that you removed
    let removed = copy.splice(i, 1);
    // check each combination if it is still descending,
    if (descending(copy)) {
      // if it is add to counter
      count++;
    }
    // put back value
    copy.splice(i, 0, removed);
  }
  return count;
}

// helper function to check if array is still in descending
function descending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(cutTrees([3, 4, 5, 4]));
console.log(descending([3, 4, 4]));
// Example test:    [3, 4, 5, 4]
// WRONG ANSWER  (got 1 expected 2)

// Example test:    [4, 5, 2, 3, 4]
// OK

// Example test:    [1, 2, 3, 3, 5, 6, 7]
// WRONG ANSWER  (got 2 expected 7)

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// a soldier that report to a higher rank is X + 1 ONLY!  2 -> 3, but not 2 -> 4
// also have to account for how many reporting officers there are
// {2: 2, 3: 3} could mean 2 soliders can report to 2 CO
// keys are RANK values are SOLDIERS
// {3: 3, 4: 1}
function solution(ranks) {
  // make a freq counter of how many soldiers and rank
  let obj = {};
  let results = 0;
  for (let soldier of ranks) {
    obj[soldier] ? obj[soldier]++ : (obj[soldier] = 1);
  }
  // sort ranks and iterate through to see if there is a X + 1 officer
  ranks.sort((a, b) => a - b);
  for (let i = 0; i < ranks.length - 1; i++) {
    if (ranks[i] + 1 === ranks[i + 1]) {
      // find in object/hash we made and
    }
  }
  // iterate through obj and see if there is a higher ranked soldier
  for (let key in obj) {
  }
  // if so add to count
  // return count
}
