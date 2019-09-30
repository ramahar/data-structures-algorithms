// ARRAY
function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[arr[i]] = i;
  }
}
// console.log(twoSum([0,1,2,4], 4));

function maxProfit(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}

function containsDuplicate(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (count[el]) count[el]++;
    else count[el] = 1;
    if (count[el] > 1) return true; 
  }
  return false;
}

function findDuplicate(arr) {
  let slow = arr[0];
  let fast = arr[fast];
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[arr[fast]];
  }
  fast = 0;
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }
  return slow; 
}

function productExceptSelf(arr) {
  let left = 1, right = 1, result = [];
  for (let i = arr.length-1; i >= 0; i--) {
    result[i] = right;
    right *= arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    result[j] *= left;
    left *= arr[j];
  }
  return result;
}

function minimumRotatedArray(arr) {
  let min = arr[arr.length-1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) return arr[i];
  }
}

function removeDuplicates(arr) {

}

// STRING

// LINKED LIST
function reverse(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev; 
}

function hasCycle(head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
}

function removeNth(head, n) {
  let slow = head, fast = head, curr = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return curr.next;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return curr; 
}

function middle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val > l2.val) [l1, l2] = [l2, l1];
  l1.next = merge(l1.next, l2);
  return l1;
}

// BINARY SEARCH TREE
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
  [root.left, root.right] = [invert(root.right), invert(root.left)];
  return root;
}

function isSubtree(s, t) {
  if (!s) return !t;
  return isSubtree(s.left, t) || isSubtree(s.right, t) || sameTree(s, t);
}

function validBST(root) {
  return helper(root, null, null);

  function helper(root, min, max) {
    if (!root) return true;
    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
  }
}

function maxPathSum(root) {
  let max = -Number.MAX_VALUE;
  function dfs(node) {
    if (!node) return 0;
    let leftSum = dfs(node.left);
    let rightSum = dfs(node.right);
    max = Math.max(max, node.val + leftSum + rightSum);

    return Math.max(0, node.val + leftSum, node.val + rightSum);
  }
  dfs(root);
  return max;
}

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right;
  if (!right) return left;
  return root;
}

function levelOrder(root) {
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let inner = [];
    let size = queue.length;
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
// root -> left -> right
function preOrder(root) {
  if (!root) return [];
  let stack = [root];
  let result = [];
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}

// IMPORTANT ALGORITHMS
function bfs(root, value) {
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === value) return node;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return null;
}

function dfs(root, value) {
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.value === value) return node;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return null;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor((arr.length)/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length || right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left, right);
}
// console.log(mergeSort([1,4,2,3,6]));

function quickSort(arr) {
  if (arr.length <= 1) return arr; 
  let pivot = arr[0];
  let left = [], right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
// console.log(quickSort([1,4,2,3,6]));

function bSearch(arr, target) {
  let start = 0, end = arr.length-1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (arr[mid] === target) return mid;
    else if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
}
// console.log(bSearch([1,2,4,5], 4))
