/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * Given an array nums of n integers where n > 1,  return an array 
 * output such that output[i] is equal to the product of all the 
 * elements of nums except nums[i].
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [1];

    for (let i = 1; i < nums.length; i++) {
      result[i] = result[i-1] * nums[i-1];
    }
    // Number to multiply result array with. Updates every iteration
    let right = 1;
    for (let i = nums.length-1; i >= 0; i--) {
      result[i] *= right;
      right *= nums[i];
    }
    return result;
};

// productExceptSelf([1,2,3,4]);
