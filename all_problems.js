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
  let fast = arr[slow];
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

// Remove duplicates from array in-place and return new length 
function removeDuplicates(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) count++; 
    else nums[i - count] = nums[i];
  }
  return nums.length - count; 
}

function maxArea(height) {
  let max = 0;
  let start = 0, end = height.length-1;
  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start);
    max = Math.max(max, area);

    if (height[start] > height[end]) end--;
    else start++; 
  }
  return max;
}

function mergeSortedArrays(nums1, m, nums2, n) {
  let length = m + n;
  m--;
  n--;
  while (length--) {
    if (n < 0 || nums1[m] > nums2[n]) nums1[length] = nums1[m--];
    else nums1[length] = nums2[n--];
  }
}

function searchRotatedArray(nums, target) {
  let start = 0, end = nums.length-1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (nums[mid] === target) return mid;
    // When dividing array into 2 halves, one half must be sorted. Check which one 
    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target <= nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      if (target >= nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
}

// STRING
function isPalindrome(s) {
  let formatted = s.replace(/\W/g, '');
  let reversed = s.split('').sort().join('');
  return formatted.toLowerCase() === reversed.toLowerCase();
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let count = {};
  for (let char of s) {
    if (count[char]) count[char]++;
    else count[char] = 1;
  }
  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;  // Compare t and s characters, then decrement char count after checking
  }
  return true;
}

function validParentheses(s) {
  let pairs = {
    "(":")",
    "{":"}",
    "[":"]"
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (pairs[el]) stack.push(pairs[el]);
    else {
      if (el !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
}

function generateParentheses(n) {
  let result = [];
  generate(n, n, '');
  return result;

  function generate(left, right, str) {
    if (str.length && !left && !right) return result.push(str); 
    if (left) generate(left - 1, right, str + '(');
    // Important conditional to check if right side is greater than left
    if (right > left) generate (left, right - 1, str + ')'); 
  }
}

function longestSubstring(s) {
  let max = 0; 
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let index = result.indexOf(char);
    result = result.slice(index + 1);
    max = Math.max(max, result.push(char));
  }
  return max;
}

function palindromicSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    helper(s, i, i);
    helper(s, i, i+1);
  }
  return count;
  function helper(s, low, high) {
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      count++;
      low--;
      high++;
    }
  }
}

function groupAnagrams(strs) {
  let map = {};
  for (let str of strs) {
    let key = str.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(str);   // Store anagrams for every string
  }
  return Object.values(map);
}

function permutations(nums) {
  let result = [];
  function permute(current, remaining) {
    if (remaining.length === 0) result.push(current.slice());
    for (let i = 0; i < remaining.length; i++) {
      // BACKTRACKING
      current.push(remaining[i]);
      let combo = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permute(current.slice(), combo);
      current.pop();
    }
  }
  permute([], nums);
  return result;
}

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

function isPalindrome(head) {
  if (head === null || head.next === null) return true;
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // Reverse second half of array, then compare with first 
  slow.next = reverse(slow.next);
  slow = slow.next;
  while (slow) {
    if (slow.val !== head.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true; 
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

// DYNAMIC PROGRAMMING
function climbStairs(n) {
  if (n >= 0 && n < 3) return n;
  let memo = [1, 2];
  for (let i = 2; i < n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }
  return memo[n-1];
}

function canJump(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < i) return false;
    max = Math.max(max, arr[i] + i);
  }
  return true;
}

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let memo = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(memo[i-1], nums[i] + memo[i-2]);
  }
  return memo[nums.length-1];
}

function coinChange(coins, amount) {
  let dp = new Array(amount + 1);
  dp.fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      let diff = i - coin;
      if (diff >= 0) dp[i] = Math.min(dp[i], dp[diff] + 1);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}
// console.log(coinChange([1,2,5], 11));

// Return all possible subsets (power set)
function subsets(nums) {
  let result = [];
  function dfs(current, index) {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      let subset = current.concat(nums[i]);
      dfs(subset, i + 1);
    }
  }

  dfs([], 0);
  return result;
}

// Find the length of the longest increasing subsequence

//! IMPORTANT ALGORITHMS
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
