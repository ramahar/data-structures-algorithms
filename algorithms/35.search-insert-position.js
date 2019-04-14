/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.58%)
 * Total Accepted:    382.2K
 * Total Submissions: 940.3K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums) return 0;
   return binarySearch(nums, target, 0, nums.length-1);
};

var binarySearch = function(array, target, start, end) {
  
  if (start > end) return start;
    
  const midPoint = Math.floor((start + end)/2);
  
// found target
  if (array[midPoint] === target) return midPoint;
  
// search the left side
  if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
  // search the right side
  if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}
