/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
// Iterate using stack
function preorderTraversal(root) {
  // Use stack to store nodes, use result to store node values 
  if (!root) return [];
  var result = [];
  var stack = [root];

  // Pop node from stack, then check if right and left subtrees exist
  while (stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}

// Recursion
// function preorderTraversal(node) {
//   let result = [];
//   traverse(node, result);
//   return result;
// }

// function traverse(node, result) {
//   if (!node) return;

//   result.push(node.val);
//   traverse(node.left, result);
//   traverse(node.right, result);
// }
