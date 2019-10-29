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
console.log(maxProductSubarray([-2,3,-4]));