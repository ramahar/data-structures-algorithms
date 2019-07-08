/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 * Given a binary tree, return the level order traversal of its nodes' values. 
 * (ie, from left to right, level by level).
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
 * @return {number[][]}
 */

var levelOrder = function(root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  stack.push(root);

  while (stack.length) {
    let size = stack.length;  // Important!
    let temp = [];
    for (let i = 0; i < size; i++) {
    let node = stack.shift();
    temp.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  result.push(temp);
}
  return result;
}

var levelOrder1 = function(root) {
    let result = [];
    function traverse(node, level) {
      if (!node) return;
      // All levels not visited yet. Result is an array of arrays,
      // where each inner array represents a level in the tree
      if (result.length <= level) result.push([]);
      // Push node to result, then its left, right subtrees if they exist
      result[level].push(node.val);
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    }
    // Recursive traversal with root node and level 0
    traverse(root, 0);
    return result;
};


// Faster solution
const levelOrder1 = root => {
  let res = [];
  levelRecursion(root, res, 0);
  return res;
};

const levelRecursion = (node, res, level) => {
  if (node === null) return;

  if (res.length < level + 1) {
    res.push([]);
  }

  levelRecursion(node.left, res, level + 1);
  levelRecursion(node.right, res, level + 1);

  res[level].push(node.val);
};
