/*
 * @lc app=leetcode id=88 lang=javascript
 * [88] Merge Sorted Array
 * Given two sorted arrays, merge them into a new array that is also sorted.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 // Greedy. Start from back. Time Complexity: O(n)
var merge = function(nums1, m, nums2, n) {
    let i = m + n;
    m--;
    n--;

    // Iterate until total length >= 0
    while (i--) {
      // If nothing is left in nums2, or if element in nums1 is bigger
      if (n < 0 || nums1[m] > nums2[n]) {
        nums1[i] = nums1[m--];
      } else {
        nums1[i] = nums2[n--];
      }
    }
};


// Alternate. Time Complexity: O(n log(n))
// Copy nums2 into the "empty" half of nums1, then sort it
var merge1 = function(nums1, m, nums2, n) {
  if (!n) return;

  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
}
