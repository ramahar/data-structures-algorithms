/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const N = coins.length
  
  const DP = Array(amount + 1).fill(0)
  
  DP[0] = 1
  
  for (const coin of coins) {
    for (let col = coin; col <= amount; col++) {
      DP[col] += DP[col - coin]
    }
  }
  
  return DP[amount]
};
