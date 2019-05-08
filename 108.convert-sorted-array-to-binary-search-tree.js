/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// Recursion 
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;

    // Middle element in array becomes root 
    let mid = Math.floor(nums.length/2);
    let root = new TreeNode(nums[mid]);

    // Recursive call on left and right subtrees 
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root; 
};
