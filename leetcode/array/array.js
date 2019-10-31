function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[arr[i]] = i;
  }
}
// console.log(twoSum([1,2,4], 6));

function maxProfit(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}
// console.log(maxProfit([2,1,6,8]));

function containsDuplicate(arr) {
  let set = new Set(arr);
  return set.size !== arr.length;
}
// console.log(containsDuplicate([1,2,3,3]));

function productExceptSelf(arr) {
  let result = [];
  let left = 1;
  let right = 1;
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
// console.log(productExceptSelf([1,2,3,5]));

// Find subarray which has the largest sum and return the sum
function maxSubarray(arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i], arr[i] + arr[i-1]);
    arr[i] = max;
  }
  return Math.max(...arr);
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

// Find the contiguous subarray which has the largest product
function maxProductSubarray(nums) {
  let result = -Number.MAX_VALUE;
  let min = 1, max = 1;
  for (let num of nums) {
    let currMin = Math.min(num, num * min, num * max);
    let currMax = Math.max(num, num * min, num * max);

    [min, max] = [currMin, currMax];
    result = Math.max(result, max);
  }
  return result;
}
// console.log(maxProductSubarray([-2,3,-4]));

function minimumRotatedArray(arr) {
  let min = arr[arr.length-1];
  for (let num of arr) {
    if (num <= min) return num;
  }
}

// Remove duplicates from array in-place and return length
var removeDuplicates = function(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = i - count;
    if (nums[i] === nums[i-1]) count++;
    else  nums[diff] = nums[i];
  }
  return nums.length - count;
}

function maxArea(heights) {
  let start = 0;
  let end = heights.length-1;
  let max = 0;
  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start);
    max = Math.max(max, area);
    if (height[start] > height[end]) end--;
    else start++;
  }
  return max;
}

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand
// Search target value and return its index 
function searchRotatedArray(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (nums[mid] === target) return mid;
    if (nums[start] <= nums[mid]) {
      if (target <= nums[mid] && target >= nums[start]) end = mid - 1;
      else start = mid + 1;
    } else {
      if (target >= nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
}

// Given 2 sorted integer arrays, merge them into one sorted array
function merge(nums1, m, nums2, n) {
  let length = m + n;
  m--;
  n--;

  while (length--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[length] = nums1[m--];
    } else {
      nums1[length] = nums2[n--];
    }
  }
  return nums1;
}
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));