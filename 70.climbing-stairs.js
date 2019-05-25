/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */

// Recursive with memoization
var climbStairs = n => {
  // Stores recursive computation results
  const memo = [];
  return getSteps(n, memo);
};

const getSteps = (n, memo) => {
  if (n <= 3) return n;

  if (memo[n]) return memo[n];   

  memo[n] = getSteps(n-1, memo) + getSteps(n-2, memo);
  return memo[n];
};

// Iterative
  

// Basic Recursive. SLOW!
var climbStairs4 = function(n) {
    if (n <= 3) return n;
    return climbStairs1(n-1) + climbStairs1(n-2); 
};
