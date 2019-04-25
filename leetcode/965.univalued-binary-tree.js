/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
 *
 * https://leetcode.com/problems/univalued-binary-tree/description/
 *
 * algorithms
 * Easy (67.24%)
 * Total Accepted:    28.6K
 * Total Submissions: 42.7K
 * Testcase Example:  '[1,1,1,1,1,null,1]'
 *
 * A binary tree is univalued if every node in the tree has the same value.
 * 
 * Return true if and only if the given tree is univalued.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1,1,1,1,1,null,1]
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,2,5,2]
 * Output: false
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of nodes in the given tree will be in the range [1, 100].
 * Each node's value will be an integer in the range [0, 99].
 * 
 * 
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
var isUnivalTree = function(root, val = root.val) {
    //Base case
    if (!root) return true; 
    // Checks node value against root value + Recursive call on left and right subtrees 
    return root.val === val && isUnivalTree(root.left, val) && isUnivalTree(root.right, val);
};
