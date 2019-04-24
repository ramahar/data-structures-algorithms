/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (45.33%)
 * Total Accepted:    219.7K
 * Total Submissions: 481.9K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // Recursive DFS 
    if (!root) return [];
    let result = [];

    function path(root, str) {
      // Root node is only node in tree 
      if (!root.left && !root.right) result.push(str + root.val);
      // Recursively go down left and right tree 
      if (root.left) path(root.left, str + root.val + "->")
      if (root.right) path(root.right, str + root.val + "->")
    }
    path(root, "");
    return result;
};
