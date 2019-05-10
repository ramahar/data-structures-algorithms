/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// Store lengths of increasing subsequences in result array, find max length
// Time complexity: O(n^2), 
var lengthOfLIS1 = function(nums) {
    if (!nums.length) return 0;
    // Filler array of nums length filled with 1's 
    let result = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
      for (j = 0; j < i; j++) {
        if (nums[j] < nums[i]) result[i] = Math.max(result[i], result[j] + 1);
      }
    }
    return Math.max(...result);
};

// Dynamic Programming + Binary search
// Time complexity: O(n log n)
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  // Store the max increasing subsequence 
  let tails = [nums[0]];

  for (let num of nums) {
    let i = 0;
    let j = tails.length; 

    // Binary search
    while (j > i) {
      let mid = Math.floor((i+j)/2);
      if (tails[mid] < num) i = mid + 1;
      else j = mid; 
    }
    // Store num if not found in tails 
    tails[j] = num; 
  }
  return tails.length;
}
