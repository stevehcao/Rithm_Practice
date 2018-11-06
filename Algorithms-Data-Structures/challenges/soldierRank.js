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
      results += obj[ranks[i]];
    }
  }
  // if so add to count
  // return count
  return results;
}

console.log(solution([3, 4, 3, 0, 2, 2, 3, 0, 0]));
console.log(solution([4, 2, 0]));
console.log(solution([4, 4, 3, 3, 1, 0]));
