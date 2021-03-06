// You are climbing a staircase of n steps. Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?
function climbStairs(n) {
  if (n < 3) return n;
  let memo = {};
  if (memo[n]) return memo[n];
  else {
    memo[n] = climbStairs(n-1) + climbStairs(n-2);
  }
  return memo[n];
}
// DP SOLUTION
function climbStairs(n) {
  if(n < 3 && n >= 0) return n;

  var arr = [1,2]
  for(let i = 2; i < n; i++) {
	  arr[i] = arr[i-1] + arr[i-2]
}
  return arr[n-1];
}
// console.log(climbStairs(3));

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

function longestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;

  var result = [];
	for (var i = 0; i < nums.length; i++) {
    result.push(1);
		for (var j = 0; j < i; j++) {
      // Ensure subsequence is increasing 
      if (nums[j] < nums[i]) result[i] = Math.max(result[i], result[j] + 1);
		}
	}
  return Math.max(...result);
}

// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that
// amount. If that amount of money cannot be made up by any combination of the coins, return -1
function coinChange(coins, amount) {
  let dp = new Array(amount + 1);
  dp.fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      let diff = i - coin;
      if (diff >= 0) dp[i] = Math.min(dp[i], dp[diff] + 1);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}
// console.log(coinChange([1,2,5], 11));






// ---------------- PRACTICE -------------------
var climbStairs = function(n) {
  if (n < 3 && n >= 0) return n;
  
  let memo = [1, 2];
  for (let i = 2; i < n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }
  return memo[n-1];
};

function canJump(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(max, nums[i] + i);
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
  return memo[memo.length-1];
}

function coinChange(coins, amount) {
  let dp = new Array(amount+1);
  dp.fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      let diff = i - coin;
      if (diff >= 0) dp[i] = Math.min(dp[i], dp[diff] + 1);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}
