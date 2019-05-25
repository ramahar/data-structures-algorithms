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
const climbStairs1 = function(n) {
  if (n <= 3) return n;
  let arr = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    arr.push(arr[i-1] + arr[i-2]);
  }
  // Last element in array will be number of ways to climb n stairs
  return arr.pop();
}  

// DYNAMIC Programming
const climbStairs2 = function(n) {
  if (n < 0) return 0;

  let steps = new Array(n+1).fill(0); // Array that holds all possible ways to get to a step

  steps[0] = 0; 
  steps[1] = 1;
  steps[2] = 2;

  if (n <= 2) {
    return steps[n];
  }

  // Calculate every next step based on 2 previous steps
  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i-1] + steps[i-2];
  }

  return steps[n];
}

// Basic Recursive. SLOW!
var climbStairs3 = function(n) {
    if (n <= 3) return n;
    return climbStairs1(n-1) + climbStairs1(n-2); 
};
