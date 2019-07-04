// Given a binary tree, find its maximum depth.
function maxDepth(root) {
  if (root === null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Given two binary trees, write a function to check if they are the same or not.
function sameTree(p, q) {
  if (!p || !q) return (p === q);

  return sameTree(p.left, q.right) && sameTree(p.right, q.right) && (p.val === q.val);
}

// Invert a binary tree
function invertTree(root) {
  if (!root) return null;

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  [root.left, root.right] = [right, left];
  return root;
}

// Given 2 binary trees, check if first tree is a subtree of the other one
function isSubtree(s, t) {
  if (!s) return !t;
  return isSubtree(s.left, t) || isSubtree(s.right, t) || isEqual(s, t);
}
function isEqual(root1, root2) {
  if (!root1 || !root2) return !root1 && !root2;
  if (root1.val !== root2.val) return false;

  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}

// Given a binary tree, determine if it is a valid binary search tree (BST).
function isValidBST(root) {

}

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
function levelOrder(root) {
  
}

// Given a binary tree, return the in order traversal of its nodes' values.
function inOrder(root) {
  let stack = []; // Keeps track of nodes and their subtrees
  let result = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
}

// Given a binary tree, return the post order traversal of its nodes' values.
function postOrder(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}