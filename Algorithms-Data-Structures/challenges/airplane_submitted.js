// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// S is a string that shows reserved seats spaced seperated
// N is a number that shows the number of rows
// try to seat as many 3 member family as possible
// across aisle do not count as being next to each other
// max config is 3 families per N, removing 1 seat from either ABC or HJK will make that seat unavailable for a family of 3

function solution(N, S) {
  // reserved seat
  let hash = {}; // right now it's being overwritten, I do not want that {'1': 'A'} maybe try {'1A': true}
  // max seating arrangement
  let max = 3 * N;
  // rows
  // empty string case
  if (S === ' ') return max;
  const rowDG = ['D', 'E', 'F', 'G'];
  const rowAC = ['A', 'B', 'C'];
  const rowHK = ['H', 'J', 'K'];
  //  turn S into an array that we can iterate
  let seats = S.split(' ');
  // iterate through reserved seats to see what is taken
  // subtract accordingly, trick is not to subtract twice, somehow remember which blocks are accounted for
  for (let seat of seats) {
    // store reserved seat key is row, val is aisle
    // will need to account for edge case if D and G seat taken in aisle *** ran out of time for this part
    if (rowDG.includes(seat[1])) {
      max--;
      for (let val of rowDG) {
        hash[seat[0] + val] = true;
      }
    }
    // need condition to prevent subtracting too many times
    if (rowAC.includes(seat[1])) {
      if (!hash[seat]) {
        max--;
        for (let val of rowAC) {
          hash[seat[0] + val] = true;
        }
      }
    }
    if (rowHK.includes(seat[1])) {
      if (!hash[seat]) {
        max--;
        for (let val of rowHK) {
          hash[seat[0] + val] = true;
        }
      }
    }
  }
  return max;
}
