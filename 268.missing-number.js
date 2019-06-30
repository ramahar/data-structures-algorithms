/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (48.14%)
 * Likes:    940
 * Dislikes: 1359
 * Total Accepted:    287K
 * Total Submissions: 590.1K
 * Testcase Example:  '[3,0,1]'
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,0,1]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * 
 * 
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    // Expected sum of sequence = n * (n+1)/2
    let expectedSum = nums.length;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      expectedSum += i;
    }
    return expectedSum - sum;
};
