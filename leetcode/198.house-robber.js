/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 // Time: O(n), Space: O(1)
var rob = function(nums) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) first = Math.max(first + nums[i], second);
    else second = Math.max(first, second + nums[i]);
  }
  return Math.max(first, second);
 };

 // Dynamic Programming 
function rob1(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const max = Math.max(a + nums[i], b);
    a = b;
    b = max;
  }

  return b;
}
