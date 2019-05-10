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
var findKthLargest1 = function(nums, k) {
  k -= 1
  return findKthLargestImpl(nums, k);
};

function findKthLargestImpl(nums, k, low = 0, high = nums.length - 1) {
  const pivot = nums[high];
  let insertI = low;
  for (let i = low; i < high; i += 1) {
      if (nums[i] < pivot) {
          swap(nums, i, insertI++);
      }
  }
  swap(nums, insertI, high); // Pivot swap
  
  if (high - k > insertI) {
      // Number is on the right side
      return findKthLargestImpl(nums, k, insertI + 1, high);
  } else if (high - k === insertI) {
      // Pivot is the number
      return pivot;
  } else {
      // Number is on the left side
      return findKthLargestImpl(nums, k - (high - insertI) - 1, low, insertI - 1);
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}