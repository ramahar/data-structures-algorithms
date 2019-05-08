/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 // Time Complexity: O(n)
var maximumProduct = function(nums) {
    // Keep track of 3 largest numbers, and 2 smallest numbers (negative)
    let max1 = max2 = max3 = Number.NEGATIVE_INFINITY;
    let min1 = min2 = Number.POSITIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      // Compare with largest numbers
      if (num >= max1) {
        max3 = max2;
        max2 = max1;
        max1 = num;
      } else if (num >= max2) {
        max3 = max2;
        max2 = num;
      } else if (num >= max3) {
        max3 = num;
      }
      // Compare with smallest numbers
      if (num <= min1) {
        min2 = min1; 
        min1 = num;
      } else if (num <= min2) {
        min2 = num; 
      }
    }
    let product1 = max1 * max2 * max3;
    let product2 = max1 * min1 * min2;
    return Math.max(product1, product2);
};
