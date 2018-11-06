function airplane(N, S) {
  // reserved seat
  let hash = {};
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
    if (rowDG.includes(seat[1])) {
      max--;
      hash[seat[0]] = seat[1];
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
      max--;
      hash[seat[0]] = seat[1];
    }
  }
  console.log(hash);
  return max;
}

// console.log(airplane(2, '1A 2F 1C')); // 4
// console.log(airplane(2, ' ')); // 6
// airplane(2, ''); // 6

function newAirplane(rows, taken) {
  let seatsTaken = taken.split(' ');
  let available = 0;
  // iterate by rows
  for (let i = 1; i <= rows; i++) {
    // if all three are not in the seatsTaken array then add to avail
    if (
      !seatsTaken.includes(i + 'A') &&
      !seatsTaken.includes(i + 'B') &&
      !seatsTaken.includes(i + 'C')
    ) {
      available++;
    }
    // have to change condition here because EFG or DEF are still valid
    if (
      !seatsTaken.includes(i + 'D') &&
      !seatsTaken.includes(i + 'G') &&
      !seatsTaken.includes(i + 'E') &&
      !seatsTaken.includes(i + 'F')
    ) {
      available++;
    }
    if (
      !seatsTaken.includes(i + 'H') &&
      !seatsTaken.includes(i + 'J') &&
      !seatsTaken.includes(i + 'K')
    ) {
      available++;
    }
  }
  return available;
}

console.log(newAirplane(2, '1A 2F 1C')); // 4
console.log(airplane(2, ' ')); // 6
console.log(airplane(2, '1A 2F 2G 1B'));
console.log(airplane(2, '1D'));
