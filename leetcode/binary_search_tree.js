function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function sameTree(p, q) {
  if (!p || !q) return p === q;
  return sameTree(p.left, q.left) && sameTree(p.right, q.right) && (p.val === q.val);
}

function invert(root) {
  if (!root) return null;
  let left = invert(root.left);
  let right = invert(root.right);
  [root.left, root.right] = [right, left];
  return root;
}

function isSubtree(s, t) {
  if (!s) return !t;
  return isSubtree(s.left, t) || isSubtree(s.right, t) || sameTree(s, t); 
}

function validateBST(root) {
  return dfs(root, null, null);

  function dfs(root, min, max) {
    if (!root) return true;
    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;
    
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
}

function levelOrder(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let size = queue.length;
    let inner = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      inner.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(inner);
  }
  return result;
}

function inOrder(root) {
  let stack = [];
  let result = [];
  while (stack.length > 0 || root) {
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

function maxPathSum(root) {
  let max = -Number.MAX_VALUE;
  getSum(root);
  return max;

  function getSum(node) {
    if (!node) return 0;
    let left = getSum(node.left);
    let right = getSum(node.right);
    max = Math.max(max, node.val + left + right);

    return Math.max(0, node.val + left, node.val + right);
  }
}

function merge(root1, root2) {
  if (!root1 || !root2) return root1 || root2;

  root1.val += root2.val;
  let left = merge(root1.left, root2.left);
  let right = merge(root1.right, root2.right);

  [root1.left, root1.right] = [left, right];
  return root1;
}

function lowestCommonAncestor(root, p, q) {
  //? Node can be descendant of itself. Traverse left, right subtrees and check base case
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (!left) return right;  
  if (!right) return left;
  return root;
}

function kthSmallest(root, k) {
  //? Inorder DFS prints array in sorted ascending order 
  let stack = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      k -= 1;
      if (k === 0) return root.val;
      root = root.right;
    }
  }
}

// Check if BST is symmetric
function isSymmetric(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);

  function isMirror(s, t) {
    if (!s && !t) return true;
    if (!s || !t || s.val !== t.val) return false;

    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  }
}

// Given preorder and inorder traversal, build a BST 
function buildTree(preorder, inorder) {
  if (!inorderlength) return null;

  let root = new TreeNode(preorder.shift());
  let index = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  return root;
}

// Verify preorder serialization of BST
function isValidSerialization(preorder) {
  //? Traverse backwards and use stack to check if there are 2 #'s before every number
  
}