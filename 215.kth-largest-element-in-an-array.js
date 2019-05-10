/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Sort array, then find kth largest element
// Time complexity: O(n log n)
var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => a - b)[nums.length-k];
};

// Alternate solution, using quicksort on the side where the number will be 
