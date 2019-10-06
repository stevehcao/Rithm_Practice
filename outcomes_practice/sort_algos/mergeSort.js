// take advantage of a single element is sorted
// merge two sorted arrays

// create empty array, take a look at smallest values in each input array
// while there are still values to look at
// push to empty array the smaller value
// once exhausted in one array, push remainging values from the other array

function mergeSortedArrs(arr1, arr2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
}

console.log(mergeSortedArrs([1, 2, 3], [2, 3, 4, 6]));
console.log(mergeSortedArrs([1, 10, 50], [2, 14, 99, 100]));

// sorting part of merge sort
// would need to use recursion

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;
  // mergeSort halves, splitting it at midpoint
  let midpt = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpt));
  let right = mergeSort(arr.slice(midpt));

  // merge the sorted back
  return mergeSortedArrs(left, right);
}

var arr = [10, 24, 76, 73, 72, 1, 9];

console.log(mergeSort(arr));
