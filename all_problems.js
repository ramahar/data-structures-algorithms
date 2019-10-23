function maxProfit(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(prices[i], prices[i] - min);
  }
  return max;
}

function containsDuplicate(nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (count[el]) count[el]++;
    else count[el] = 1

    if (count[el] > 1) return true;
  }
  return false;
}

function productExceptSelf(arr) {
  let result = [];
  let leftMult = 1, rightMult = 1;
  for (let i = arr.length-1; i >= 0; i--) {
    result[i] = rightMult;
    rightMult *= arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    result *= leftMult;
    leftMult *= arr[j];
  }
  return result;
}

function maxSubArray(nums) {
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], nums[i] + nums[i-1]);
    nums[i] = max;
  }
  return Math.max(...nums);
}

function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[slow];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

function maximumProductSubarray(nums) {
  let result = -Number.MAX_VALUE;
  let min = 1, max = 1;
  for (let num of nums) {
    let currMin = Math.min(num, num * min, num * max);
    let currMax = Math.max(num, num * max, num * min);

    [min, max] = [currMin, currMax];
    result = Math.max(result, max);
  }
  return result;
}

function minimumRotatedArray(arr) {
  let min = arr[arr.length-1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) return arr[i];
  }
}

// Remove duplicate from array in place and return new length
function removeDuplicates(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) count++;
    else nums[i - count] = nums[i];
  }
  return nums.length-count;
}

function maxArea(height) {
  let start = 0;
  let end = height.length-1;
  let max = 0;
  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start);
    max = Math.max(max, area);

    if (height[start] > height[end]) end--;
    else start++;
  }
  return max;
}

function searchRotatedArray(nums, target) {
  let start = 0;
  let end = nums.length-1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (nums[mid] === target) return mid;

    // Check if left half is sorted
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      // Check if right half is sorted 
    } else {
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
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
  let slow = head, fast = head;
  let node = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return node.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return node;
}

function middle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeLists(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val > l2.val) [l1, l2] = [l2, l1];
  l1.next = megeLists(l1.next, l2);
  return l1;
}

// DYNAMIC PROGRAMMING
function climbStairs(n) {
  if (n <= 3 && n >= 0) return n;
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

function rob(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let memo = [arr[0], Math.max(arr[0], arr[1])];
  for (let i = 2; i < arr.length; i++) {
    memo[i] = Math.max(memo[i], memo[i-2] + arr[i]);
  }
  return memo[arr.length-1];
}

function coinChange(coins, amount) {
  let dp = new Array(amount + 1);
  dp.fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      let diff = i - coin;
      if (diff >= 0) dp[i] = Math.min(dp[i], dp[diff] + 1);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}

function powerSet(nums) {
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
