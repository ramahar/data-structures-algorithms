function climbStairs(n) {
  if (n >= 0 && n < 3) return n;

  let memo = [1, 2];
  for (let i = 2; i < n; i++) {
    memo[i] = memo[i-1] + memo[i];
  }
  return memo[n];
}

function canJump(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < i) return false;
    max = Math.max(max, arr[i] + i);
  }
  return true;
}

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let memo = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(memo[i-1], nums[i] + memo[i-2]);
  }
  return memo[nums.length-1];
}

// Find fewest number of coins needed to sum up to amount
function coinChange(coins, amount) {
  let dp = new Array(amount + 1);
  dp.fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      let diff = i - coin;
      if (diff >= 0) dp[i] = Math.min(dp[i], dp[diff] + 1);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}
// console.log(coinChange([1,2,5], 11));

// Find power set 
function subsets(nums) {
  let result = [];
  dfs([], 0);

  function dfs(current, index) {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      let subset = current.concat(nums[i]);
      dfs(subset, i + 1);
    }
  }
  return result;
}

function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  let dp = new Array(nums.length);
  dp.fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}