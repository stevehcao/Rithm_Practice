// Write a program that, given an array, returns the sum of the items in the array.
// You should do this with recursion, not using a loop or the reduce function.

// base case to end the recursion
// recursion is a function that calls itself until it doesn't
// input: array of nums
// output: number

function recurSum(arr) {
  // base case
  if (arr.length === 0) return 0;
  // call function but with a slightly smaller input
  // this call needs a way to get to the base case otherwise you will have infinite loop
  return arr[0] + recurSum(arr.slice(1))
  // return sum
}

// input: array 
// output: number 

// base case would be empty array 
function sum(arr) {
  // base case empty array 
  if (arr.length === 0) {
    return 0;
  }
  
  // store popped value
  firstEl = arr[0]
  return firstEl + sum(arr.slice(1));
  // recursion case

}

function MODELsum(nums) {
  if (nums.length === 0) return 0;
  
  return nums[0] + sum(nums.slice(1))
}

//sum([1, 2, 3])  // 6

console.log(recurSum([1, 2, 3]))  // 6