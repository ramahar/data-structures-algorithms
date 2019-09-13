// Array Practice Questions
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (map[diff] !== undefined) return [map[diff], i];
      map[nums[i]] = i;
    }
}
// console.log(twoSum([2,7,11,15], 9))

// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length-1;
  
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (target > nums[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return start;   // Index if inserted in order 
}
// console.log(searchInsert([1,3,5,6], 5));

// Given an array of stock prices, if only permitted to complete at most one transaction,
// (i.e buy one and sell one share) design an algorithm to find the max profit
function maxProfit(prices) {
  let min = prices[0]; 
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    // Keep track of lowest number and highest profit in every iteration 
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}
// console.log(maxProfit([7,1,5,3,6,4]));

// Given an array of integers, find if the array contains any duplicates.
function containsDuplicate(nums) {
  return (new Set(nums).size !== nums.length);
}
// console.log(containsDuplicate([1,2,3,1]));

// Find the intersection of 2 arrays
function intersection(nums1, nums2) {
  return nums1.filter(el => nums2.includes(el));
}
// Faster alternative using set
function intersection2(nums1, nums2) {
  let set = new Set(nums1);
  let filtered = nums2.filter(el => set.has(el));
  return [...new Set(filtered)];
}
// console.log(intersection([1, 2, 5], [2, 7]));

// Given an integer array nums, find the contiguous subarray which has 
// the largest sum and return the sum
function maxSubArray(nums) {
  for (let i = 1; i < nums.length; i++) {
    let maxSum = Math.max(nums[i], nums[i] + nums[i-1]);
    nums[i] = maxSum;
  }
  return Math.max(...nums);
}
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
// find the one that is missing from the array.
function missingNumber(arr) {
  // Sum of a sequence = n * (n+1)/2
  let sum = 0;
  let expected = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    expected += i + 1;
  }
  return expected - sum; 
}
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// Flatten an array of arrays
function flatten(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) result.push(arr[i]); 
    else result = result.concat(flatten(arr[i]));
  }
  return result;
}
// console.log(flatten([1,[2,[3]],[4]]));

// Given an array with a duplicate, find the duplicate number in the array
function findDuplicate(nums) {
  // Use a linked list with 2 pointers. Duplicate is where the list runs into a loop
  let slow = nums[0];
  let fast = nums[slow];

  // Here fast moves 2 steps at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  // Here fast moves 1 step at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
// console.log(findDuplicate([1,3,4,2,2]));

// Given an array of n integers, return an array output such that output[i]
// is equal to the product of all elemnts of nums, except nums[i]
function productExceptSelf(nums) {
  let result = [];
  let leftMult = 1;
  let rightMult = 1;
  // Break up into 2 parts: Left product and right product 
  for (let i = nums.length-1; i >= 0; i--) {
    result[i] = rightMult;
    rightMult *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    result[j] *= leftMult;
    leftMult *= nums[j];
  }
  return result;
}
// console.log(productExceptSelf([1,2,3,4]));

// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) 
// which has the largest product.
function maxProduct(nums) {
  let result = -Number.MAX_VALUE;   // To handle negative * negative 
  let min = 1;
  let max = 1;

  for (let num of nums) {
    let currMin = Math.min(num, num * min, num * max);
    let currMax = Math.max(num, num * min, num * max);

    [min, max] = [currMin, currMax];
    result = Math.max(result, max);
  }
  return result; 
}
// console.log(maxProduct([-2,3,-4]));

// Given n non-negative integers representing an elevation map where the width of 
// each bar is 1, compute how much water it is able to trap after raining.
var trap = function(height) {
  let trapped = 0;
  let left = 0, right = height.length-1;
  let leftHeight = 0, rightHeight = 0;

  while (left <= right) {
    if (leftHeight <= rightHeight) {
      leftHeight = Math.max(leftHeight, height[left]);
      trapped += leftHeight - height[left];
      left++;
    } else {
      rightHeight = Math.max(rightHeight, height[right]);
      trapped += rightHeight - height[right];
      right--;
    }
  }
  return trapped; 
}
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));