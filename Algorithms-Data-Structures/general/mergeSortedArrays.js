// 3/6/19

// time: O(n+m)log(n+m)
// O(n)log(n)
// space: O(1)
function mergeNaive(nums1, m, nums2, n) {
  // naive would merge both lists into one and then sort
  let mergedArr = nums1.concat(nums2);
  mergedArr.sort((a, b) => {
    return a - b;
  });
  return mergedArr.slice(n);
}

// console.log(mergeNaive([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// intuition
/**
 * time: O(n+m)
 * space: O(n+m)
 * two pointers approach
 * push smallest value in the output array at each step
 *
 *
 */

/**
 * two pointers start from the end
 * is possible because array one has space
 * check from the end and whichever is largest will be rewritten
 * time: O(n+m)
 * space: O(1)
 */

function merge(nums1, m, nums2, n) {
  // check ends of both arrays backwards
  // use 3 pointers
  // iterate from end of nums1
  // conditionals to check numbers
  // replace end of nums1
  //we don't want the length, we want the start position of the final elements
  m--;
  n--;

  while (m + n >= -1) {
    //If bigger, or nothing left in nums2, copy it over
    if (nums1[m] > nums2[n] || n < 0) {
      nums1[m + n + 1] = nums1[m];
      m--;
    } else {
      nums1[m + n + 1] = nums2[n];
      n--;
    }
  }
  return nums1;
  // // while loop when you don't want to move everytime
  // while (point1 > 0 && point2 > 0) {
  //   if (nums1[point1] < nums2[point2]) {
  //     nums1[filler] = nums2[point2];
  //     point2--;
  //     filler--;
  //   } else {
  //     nums1[filler] = nums1[point1];
  //     nums1[point1] = nums2[point2];
  //     point1--;
  //     filler--;
  //   }
  // }
  // return nums1;
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([0], 0, [1], 1));

// another attempt
function myMerge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p3 = m + n - 1; // end of the first array

  // while loop when unsure of when to move pointers or if iteration is not constant
  while (p2 > -1 && p1 >= -1) {
    // conditional to check how to change the first array
    if (nums2[p2] < nums1[p1] || n < 0) {
      nums1[p3] = nums1[p1];
      p1--;
      p3--;
    } else {
      nums1[p3] = nums2[p2];
      p2--;
      p3--;
    }
  }

  return nums1;
}

console.log(myMerge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), 'MY MERGE');

console.log(myMerge([0], 0, [1], 1), 'my MERGE');

// FASTEST MERGE
function fastest(nums1, m, nums2, n) {
  let k = m + n - 1,
    i = m - 1,
    j = n - 1; // pointer 2 to nums2 arr
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k = k - 1;
      i = i - 1;
    } else {
      nums1[k] = nums2[j];
      k = k - 1;
      j = j - 1;
    }
  }
  // while there are still numbers left add it to the arr
  while (j >= 0) {
    nums1[k] = nums2[j];
    k = k - 1;
    j = j - 1;
  }
  return nums1;
}
