/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    // Check if node's value is between upper and lower bounds
    if (root.val <= min || root.val >= max) return false;

    // All nodes in left branch must be less than root, right greater
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
