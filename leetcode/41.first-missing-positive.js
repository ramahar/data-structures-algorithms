/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (28.45%)
 * Total Accepted:    202.8K
 * Total Submissions: 710.1K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,0]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Note:
 * 
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let max = 0;
    //Object to store numbers seen 
    let result = {};
    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      result[curr] = curr;
      // if (curr > max) max = curr;  
      max = curr > max ? curr : max 
    }

    //Edge case: If array contains all negative numbers or 0
    if (max === 0) return 1;

    //First number which doesn't exist in object is the answer 
    for (let i = 1; i < max; i++) {
      if (!result[i]) return i;
    }

    //Edge case: If missing positive number is greater than max 
    return max+1; 
};
