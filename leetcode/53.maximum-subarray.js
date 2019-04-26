/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    // Updates largest sum in every iteration  
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
  }
  return Math.max(...nums);
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))