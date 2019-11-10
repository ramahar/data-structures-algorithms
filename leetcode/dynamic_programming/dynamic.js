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

// Given a matrix and a word, check if the word exists in matrix 
var exist = function(board, word) {
  let wordLength = word.length;
  word = word.split("");
  
  function verify(row, col, matrix, path){
      if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] != word[path] || path > wordLength)
          return false;
      // Up to this point, we found the char we were looking for
      path++;
      matrix[row][col] = '#';
      
      //If we find the word
      if(path === wordLength)
          return true;
      //Up
      if(verify(row - 1, col, matrix, path))
          return true;
      //Right
      if(verify(row, col + 1, matrix, path))
          return true;
      //Down
      if(verify(row + 1, col, matrix, path))
          return true;
      //Left
      if(verify(row, col - 1, matrix, path))
          return true;
      // Backtrack
      matrix[row][col] = word[--path];
      return false;
  };
  
  for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
          if(verify(i, j, board, 0))
              return true;
      }
  }
  return false;
};

// Find length of longest common subsequence in 2 strings
var longestCommonSubsequence = function(text1, text2) {
  let dp = [];
  let max = 0;
  for(let i = 0; i <= text1.length; i++) {
      // Entire first row and column is 0 
      dp.push(new Array(text2.length + 1).fill(0));
  }
  for(let i = 1; i < dp.length; i++) {
      for(let j = 1; j < dp[0].length; j++) {
          // If letters match, diagonal + 1
          if (text1[i-1] === text2[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1
          // If no match, get max of adjacent 
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
          }
          max = Math.max(max, dp[i][j]);
      }
  }
  return max;
};

// Given a 2D board and a word, check if the word exists in the grid (letters are adjacent)
function exist(board, word) {

}
console.log(exist([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], 'ABCCED'));