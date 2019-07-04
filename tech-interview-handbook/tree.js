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
  
}

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
function levelOrder(root) {
  
}