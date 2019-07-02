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