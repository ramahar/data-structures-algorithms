/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// Cannot use map. Cannot modify array
// Use method similar to linked list cycle
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];

    // Fast moves 2 steps at a time
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
    }
    fast = 0;

    // Fast moves one step at a time
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
    // Duplicate is where slow and fast pointers meet 
    return slow; 
};
