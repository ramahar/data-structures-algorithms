import { map } from "async";

/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (42.80%)
 * Total Accepted:    1.6M
 * Total Submissions: 3.8M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //Time complexity: O(n)
 //Space Complexity: O(n)
var twoSum = function(nums, target) {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
     if (map[target - nums[i]] !== undefined) return [map[target-nums[i]], i]
     map[nums[i]] = i;
    }
};