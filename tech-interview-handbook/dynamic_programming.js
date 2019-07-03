// You are climbing a staircase of n steps. Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?
function climbStairs(n) {
  let memo = {};
  if (memo[n]) return memo[n];

  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  memo[n] = climbStairs(n-1) + climbStairs(n-2);
  return memo[n];
}
// console.log(climbStairs(3));

// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that
// amount. If that amount of money cannot be made up by any combination of the coins, return -1
function coinChange(coins, amount) {

}
// console.log(coinChange([1,2,5], 11));

// Given an array, you are initially positioned at the 1st index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.
function canJump(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // Return false if no. of max steps cannot reach position i 
    if (max < i) return false;
    max = Math.max(nums[i] + i, max);
  }
  return true;
}
// console.log(canJump([2,3,1,1,4]));

// Given an array of integers representing money in each house, determine the max
// amount of money you can rob without robbing 2 adjacent houses
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let result = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    // Store the max amount of money possible, with amount increasing
    result[i] = Math.max(result[i-1], result[i-2] + nums[i]);
  }
  return result[result.length-1];
}
// console.log(rob([1,2,3,1]));