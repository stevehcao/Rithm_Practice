// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * is just an array of objs [{start: 1, end:6}]
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function merge(intervals) {
  // sort start time
  intervals.sort(function(a, b) {
    return a.start - b.start;
  });
  // the first time slot
  let prev = intervals[0];
  let mergedTimes = [prev];
  // iterate over intervals
  for (let curr of intervals) {
    if (curr.start <= prev.end) {
      // merge times
      prev.end = Math.Max(prev.end, curr.end);
    } else {
      mergedTimes.push(curr);
    }
  }
}

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

var oldMerge = function(intervals) {
  intervals.sort(function(a, b) {
    return a.start - b.start;
  });
  console.log(intervals[0]);
  let newArr = [];
  // iterate over intervals
  // have to sort array
  for (let i = 0; i < intervals.length - 1; i++) {
    let currStart = intervals[i].start;
    let currEnd = intervals[i].end;
    let nextStart = intervals[i + 1].start;
    let nextEnd = intervals[i + 1].end;

    if (currEnd >= nextStart) {
      newArr.push([currStart, nextEnd]);
    } else {
      newArr.push([currStart, currEnd]);
    }
  }
  return newArr;
};
