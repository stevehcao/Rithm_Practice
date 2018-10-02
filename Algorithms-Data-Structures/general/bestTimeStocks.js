// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
// want to maximize profits by buying first and selling second
// has to be in order
var maxProfitFirstTry = function(prices) {
  // store max profits
  // use two pointers
  // iterate through array
  // if left pointer value is > right value move both pointers up
  // otherwise take difference and compare profits
  // move only right pointer
  let max = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left++;
      right++;
    } else {
      max = Math.max(max, prices[right] - prices[left]);
      right++;
    }
  }
  return max;
};
// doesn't work for [2,1,2,1,0,1,2] expect 2
console.log(maxProfitFirstTry([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfitFirstTry([7, 6, 4, 3, 1])); // 0

function maxProfitsModel(prices) {
  // min price
  // max profits
  // iterate through using regular for loop
  // if current price is smaller than min set it as min
  // if current price - min price is greater than max profits set as max
  let minPrice = Infinity;
  let maxProfits = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfits = Math.max(maxProfits, price - minPrice);
  }
  return maxProfits;
}

console.log(maxProfitsModel([2, 1, 2, 1, 0, 1, 2])); // 2
