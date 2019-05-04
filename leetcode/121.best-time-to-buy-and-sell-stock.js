/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// Time Complexity: O(n)
var maxProfit = function(prices) {
    let min = Infinity;
    let max = 0; 

    // Calculate max profit in every iteration 
    for (let i = 0; i < prices.length-1; i++) {
      min = Math.min(prices[i], min);
      max = Math.max(max, prices[i+1] - min);
    }
    return max;
};
// console.log(maxProfit([7,1,5,3,6,4]));