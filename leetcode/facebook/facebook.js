// Given a sorted array that has been rotated, perform a search on it
//? Idea: One half is sorted. Find which half, then binary search 
function searchRotated(nums, target) {
  let start = 0, end = nums.length-1;
  
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (target === nums[mid]) return mid;
    // Left half is sorted
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

// Add 2 binary numbers given as strings
//? Idea: Iterate backwards, calculate carry and sum at every digit 
function addBinary(a, b) {
  let i = a.length-1;
  let j = b.length-1;
  let sum = '';
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let aDigit = a[i] || '0';
    let bDigit = b[i] || '0';

    let temp = parseInt(aDigit) + parseInt(bDigit) + carry;
    let digit = temp % 2;
    let carry = Math.floor(temp / 2);

    sum = digit + sum;
    i--;
    j--;
  }
  if (carry) sum = carry + sum;
  return sum;
}

// Print binary tree in level order 
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

// Merge 2 sorted arrays in-place
//? Iterate backwards with combined length, pushing greater elements first
function merge(nums1, m, nums2, n) {
  let length = m + n;
  m--;
  n--;
  while (length--) {
    if (nums1[m] > nums2[n] || n < 0) {
      nums1[length] = nums1[m--];
    } else {
      nums1[length] = nums2[n--];
    }
  }
  return nums1;
}

// Find minimum in rotated sorted array
//? Idea: Use middle element to decide which half is sorted; then binary search 
function findMin(nums) {
  let start = 0, end = nums.length-1;
  while (start < end) {
    if (nums[start] < nums[end]) return nums[start];  // No rotation
    let mid = Math.floor((start+end)/2);
    if (nums[mid] >= nums[start]) start = mid + 1;   
    else end = mid; 
  }
  return nums[start];
}
// console.log(findMin([3,4,5,1,2]));