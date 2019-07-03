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
