// Imagine an array of numbers, each number representing a cost. Your goal is to write a function called minCostTraversal which will traverse the array and select values from it in a way that minimizes the total cost.

// Here's how it works: after paying the cost at an element, you can either move 1 or 2 spaces to the right in order. You can begin traversing through the array at index 0 or at index 1. You can assume that all costs will be positive whole numbers.

// Examples

// recursion:
// base case: arr.length <= 1 to 0
// recursive step: math.min 
// some how to achieve base case  

function minCostTraversal(nums) {
  // minSum
  // base case
  // how to find min sum of array if you can only skip one or move one
  if (nums.length <= 1) return 0;
  let oneStepCost = nums[0] + minCostTraversal(nums.slice(1));
  let twoStepCost = nums[1] + minCostTraversal(nums.slice(2));
  return Math.min(oneStepCost, twoStepCost);
}

minCostTraversal([1, 2, 3]); // 2 - select the item at index 1
minCostTraversal([2, 10, 1, 1, 100, 3]); // 7 - skip over 10 and 100
minCostTraversal([2, 1, 3, 2, 1]); // 3
minCostTraversal([3, 2, 7, 9, 1, 3, 2, 10, 6, 1]); // 18
minCostTraversal([8, 10, 1000, 1]); // 11

// Dynamically Program
/**
 * @param {number[]} cost
 * @return {number}
 */

 var minCostClimbingStairs = function(cost) {
  let len = cost.length;
  let count = Array(len);
  count[0] = cost[0];
  count[1] = cost[1];
  for (let i = 2; i < len; i++){
      count[i] = Math.min(count[i-2], count[i-1]) + cost[i];
  }
  console.log(count)
  return Math.min(count[len-2],count[len-1]);
};