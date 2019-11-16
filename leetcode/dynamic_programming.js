// Given number of stairs, how many ways are there to climb up n stairs?
function climbStairs(n) {
  if (n >= 0 && n < 3) return n;

  let memo = [1, 2];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }
  return memo[n-1];
}

function canJump(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < i) return false;    // Index cannot be reached 
    max = Math.max(max, arr[i] + i);
  }
  return true;
}

// Determine max money you can rob without robbing 2 adjacent houses
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let memo = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(memo[i-1], nums[i] + memo[i-2]);
  }
  return memo[memo.length-1];
}

// Given coins and amount, find minimum no. of coins needed to sum up to amount
function coinChange(coins, amount) {
  //? Create matrix with combinations of coins that sum up to amount. Find minimum
  let dp = new Array(amount + 1);
  dp.fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      let diff = i - coin;
      if (dp[diff] >= 0) dp[i] = Math.min(dp[i], dp[diff] + 1);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}
console.log(coinChange([1,2,5], 11));