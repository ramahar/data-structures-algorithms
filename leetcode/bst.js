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
  [root.left, root.right] = [left, right];
  return root;
}

function isSubtree(s, t) {
  if (!s) return !t;
  return isSubtree(s.left, t) || isSubtree(s.right, t) || sameTree(s, t);
}

function isValidBST(root) {
  return dfs(root, null, null);
  function dfs(root, min, max) {
    if (!root) return true;
    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
}

function levelOrder(root) {
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    let temp = [];
    let size = stack.length;
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

function inOrder(root) {
  let stack = [];
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

function maxPathSum(root) {
  let max = -Number.MAX_VALUE;
  dfs(root);
  return max;

  function dfs(root) {
    if (!root) return 0;
    let leftSum = dfs(root.left);
    let rightSum = dfs(root.right);
    max = Math.max(max, root.val + leftSum + rightSum);

    return Math.max(0, node.val + leftSum, node.val + rightSum);
  }
}