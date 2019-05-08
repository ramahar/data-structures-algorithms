/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // XOR ^ with number itself returns 0
    return nums.reduce((a, b) => a ^ b);
};
