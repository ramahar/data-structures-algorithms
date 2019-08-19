// ARRAY
function twoSum(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (obj[diff] !== undefined) return [obj[diff], i];
    obj[arr[i]] = i;
  }
}
// console.log(twoSum([1,2,4,6], 6));

function maxProfit(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}
// console.log(maxProfit([7,1,5,3,6,4]));

function containsDuplicate(arr) {
  let set = new Set(arr);
  return set.size !== arr.length;
}
// console.log(containsDuplicate([1,1,4,6]));

function productExceptSelf(arr) {
  let result = []; left = 1; right = 1;
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
// console.log(productExceptSelf([1,2,3,4]));

function maxSubArray(arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i], arr[i] + arr[i-1]);
    arr[i] = max;
  }
  return Math.max(...arr);
}
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// STRING
function validAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function validPalindrome(str) {
  let stripped = str.replace(/\W/g, '');
  let reversed = stripped.split('').reverse().join('');
  return reversed.toLowerCase() === str.toLowerCase();
}
// console.log(validPalindrome('bab'));

function validParentheses(str) {
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (pairs[el]) stack.push(pairs[el]);
    else {
      if (stack.pop() !== el) return false;
    }
  }
  return stack.length === 0;
}
// console.log(validParentheses('()[]'));

function lengthOfLongestSubstring(str) {
  let result = []; max = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    result = result.slice(result.indexOf(char) + 1);
    max = Math.max(max, result.push(char));
  }
  return max;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));

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

function merge(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val > l2.val) [l1, l2] = [l2, l1];
  l1.next = merge(l1.next, l2);
  return l1;
}


// SORTS
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) result.push(right.shift());
    else result.push(left.shift());
  }
  result = result.concat(left, right);
  return result;
}
// console.log(mergeSort([1, 4, 2, 7, 6]));

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = []; right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
// console.log(quickSort([1, 4, 2, 7, 6]));

function bSearch(arr, target) {
  let end = arr.length-1;
  let start = 0;

  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return null;
}
// console.log(bSearch([1,3,5,6,8], 6));