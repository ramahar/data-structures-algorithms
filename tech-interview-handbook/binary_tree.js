// Given a binary tree, find its maximum depth.
function maxDepth(root) {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Given two binary trees, write a function to check if they are the same or not.
function sameTree(p, q) {
  if (!p || !q) return (p === q);

  return sameTree(p.left, q.left) && sameTree(p.right, q.right) && (p.val === q.val);
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

// Given a binary search tree, write a function to find the kth smallest element in it
function kthSmallest(root, k) {
  let stack = [];
  let count = 0;  // To keep track of kth element 
  let node = root;

  while (true) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length === 0) break;
      node = stack.pop();
      count += 1;
      if (count === k) return node.val;
      node = node.right;
    }
  }
}

// Verify preorder serialization
// Each number must have 2 #'s before. Iterate backwards 
var isValidSerialization = function(preorder) {
  preorder = preorder.split(",");
  var stack = [];
  for(let i = preorder.length-1 ; i >= 0 ; i--){
      if(preorder[i] !== "#"){
          if(!stack.pop() || !stack.pop()) return false;
      }
      stack.push("#");
  }
  return stack.length === 1;
};
// console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));





// ---------------- PRACTICE -------------------
function maxDepth(root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function sameTree(s, t) {
  if (!s || !t) return s === t;
  
  return sameTree(s.left, t.left) && sameTree(s.right, t.right) && (s.val === t.val);
}

function invert(root) {
  if (!root) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  [root.right, root.left] = [left, right];
  return root;
}

function isSubtree(s, t) {
  if (!s) return !t;
  return isSubtree(s.left, t) || isSubtree(s.right, t) || isEqual(s, t);
}
function isEqual(root1, root2) {
  if (!root1 || !root2) return !root1 && !root2;
  if (root1.val !== root2.val) return false;

  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}

function kthSmallest(root, k) {
  function inOrder(root) {
    
    let stack = [];
    
    while (root !== null || stack.length !== 0) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      k -= 1;
      if (k === 0) return root.val;
      root = root.right;
    }
  }
  return inOrder(root);
}

function levelOrder(root) {
  let result = [];
  levelRecursion(root, result, 0);
  return result;
}
function levelRecursion(node, result, level) {
  if (!node) return null;
  if (result.length < level + 1) result.push([]);

  levelRecursion(node.left, result, level + 1);
  levelRecursion(node.right, result, level + 1);

  result[level].push(node.val);
}

var isValidBST = function(root) {
  if (!root) return true;
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  
  function dfs(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    
    // Make sure left node is betwen min and val, and right node is between val and max
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
};