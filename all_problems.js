// ARRAY
function twoSum(arr, target) {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (map[diff] !== undefined) return [map[diff], i];
		map[arr[i]] = i;
	}
}
// console.log(twoSum([1,3,5], 8));

function maxProfit(prices) {
	let min = prices[0];
	let max = 0;
	
	for (let i = 1; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		
	}
	return max;
}
// console.log(maxProfit([1,2,4]));

function containsDuplicate(arr) {
  let set = new Set(arr);
  return set.size !== arr.length;
}
// console.log(containsDuplicate([1,2,2]));

function productExceptSelf(arr) {
	let result = [];
	let left = 1, right = 1;
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
// console.log(productExceptSelf([1,2,4]));

function maxSubArray(arr) {
	for (let i = 1; i < arr.length; i++) {
		let max = Math.max(arr[i], arr[i] + arr[i-1]);
		arr[i] = max;
	}
	return Math.max(...arr);
}
// console.log(maxSubArray([2,1,4,3]));

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
// console.log(findDuplicate([1,2,2]));

function maxProduct(arr) {
  let result = -Number.MAX_VALUE;   // Handles negative * negative 
  let min = 1, max = 1;
  for (let el of arr) {
    currMin = Math.min(el, el * min, el * max);
    currMax = Math.max(el, el * min, el * max);

    [min, max] = [currMin, currMax];
    result = Math.max(result, max);
  }
  return result;
}
// console.log(maxProduct([-2,3,-4]))

function findMin(nums) {
  let min = nums[nums.length-1];  // Compare all elements with last element 
  for (let i = 0; i < nums.length; i++) {
   if (nums[i] <= min) return nums[i];
  }
}

function removeDuplicates(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = i - count;
    
    if (nums[i] === nums[i-1]) count++;   
    else nums[diff] = nums[i];    // Replace duplicate element in place
  }
  return nums.length - count;
}
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

function maxArea(height) {
  let start = 0, end = height.length - 1;
  let max = 0;

  while (start < end) {
    let minHeight = Math.min(height[start], height[end]);
    let area = minHeight * (end - start);
    max = Math.max(max, area);

    if (height[start] > height[end]) end--;   // Narrow down container right -> left 
    else start++;
  }
  return max;
}

// STRING 
function validAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function isPalindrome(s) {
  let formatted = s.replace(/\W/g, '');
  let reversed = s.split('').reverse().join('');
  return formatted.toLowerCase() === reversed.toLowerCase();
}

function validParentheses(s) {
  let pairs = {

  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (pairs[el]) stack.push(pairs[el]);
    else {
      if (el !== stack.pop()) return false;
    }
  }
  return stack.length === 1;
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
    // Bound check and palindrome check
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

    if (!map[str]) map[str] = [];
    map[key].push(str);
  }
  return Object.values(map);
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

function removeNth(head) {
  let curr = head, slow = head, fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return curr.next;

  while (fast.next) {
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

// DYNAMIC PROGRAMMING 
function climbStairs(n) {
  if (n < 3 && n >= 0) return n;

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

function robber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let memo = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(memo[i-1], nums[i] + memo[i-2]);
  }
  return memo[memo.length-1];
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

// Given an array, return all possible subsets (power set)
function subsets(nums) {
  let result = [];
  dfs([], 0);
  return result;

  function dfs(current, index) {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      let subset = current.concat(nums[i]);
      dfs(subset, i + 1);
    }
  }
}

// INTERVALS
function merge(intervals) {
  if (intervals.length === 0) return intervals;

  intervals.sort((a,b) => a[0] - b[0]);
  let prev = intervals[0];
  let result = [prev];

  for (let interval of intervals) {
    if (interval[0] < prev[1]) prev[1] = Math.max(prev[1], interval[1]);
    else {
      result.push(interval);
      prev = interval;
    }
  }
  return result;
}

function canAttend(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let currStart = intervals[i][0];
    let prevEnd = intervals[i-1][1];
    if (currStart < prevEnd) return false;
  }
  return true; 
}

// BINARY TREE
function maxDepth(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
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

function isValidBST(root) {
  return helper(root, null, null);

  function helper(root, min, max) {
    if (!root) return true;
    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;

    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
  }
}

function levelOrder(root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let size = stack.length;
    let inner = [];
    for (let i = 0; i < size; i++) {
      let node = stack.pop();
      inner.push(node.val);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    result.push(inner);
  }
  return result; 
}

// SORT 
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor((arr.length)/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    return result.concat(left, right);
  }
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  let pivot = arr[0];
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return left.concat(pivot, right);
}

function bSearch(arr) {
  let start = 0, end = arr.length-1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
}
