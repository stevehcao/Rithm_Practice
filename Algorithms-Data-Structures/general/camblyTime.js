// assume sorted by start time
let schedule = [
  { startTime: 1, endTime: 4 },
  { startTime: 3, endTime: 7 },
  { startTime: 8, endTime: 10 }
];

let test2 = [
  { startTime: 1, endTime: 4 },
  { startTime: 5, endTime: 7 },
  { startTime: 8, endTime: 10 }
];

let test3 = [
  { startTime: 1, endTime: 4 },
  { startTime: 4, endTime: 7 },
  { startTime: 8, endTime: 10 },
  { startTime: 9, endTime: 11 }
];

/**
 * time complexity: O(n), we are iterating through just once
 * Space complexity: O(n), creating a new array of objects.
 * @param {Array} arr
 */
function time(arr) {
  // arr of objs
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    // if we are at the last element in arr
    // check the last element of results compared to the last element in arr
    if (i === arr.length - 1) {
      if (arr[i].startTime <= results[results.length - 1].endTime) {
        results[results.length - 1] = {
          startTime: results[results.length - 1].startTime,
          endTime: arr[i].endTime
        };
      } else {
        results.push(arr[i]);
      }
    } else if (arr[i].endTime >= arr[i + 1].startTime) {
      results.push({
        startTime: arr[i].startTime,
        endTime: arr[i + 1].endTime
      });
      i++;
    } else {
      results.push(arr[i]);
    }
  }
  return results;
}

console.log(time(schedule));
console.log(time(test2));
console.log(time(test3));
