// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// 3 approaches
/*
1) merge both arrays and sort naive approach
2) 2 pointers and start from the beginning
  - push smallest output at each step
  - create a copy of the nums1 array
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;
var merge = function(nums1, m, nums2, n) {
  // 2 pointers
  // iterate over both
  // if the integer from nums2 is greater then swap
  let copyNums1 = nums1.slice();
  nums1 = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < m && p2 < n) {
    if (copyNums1[p1] < nums2[p2]) {
      nums1.push(copyNums1[p1]);
      p1++;
    } else {
      nums1.push(nums2[p2]);
      p2++;
    }
  }
  // left over elements to add
  while (p1 < m) {
    nums1.push(copyNums1[p1]);
    p1++;
  }
  while (p2 < n) {
    nums1.push(nums2[p2]);
    p2++;
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));


// iterate from the ends
function endMerge(nums1, m, nums2, n) {
  m--;
  n--;
  // iterate from the end
  // conditionally build backwards
  let end = m + n + 1;

}