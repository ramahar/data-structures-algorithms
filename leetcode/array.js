function twoSum(arr, target) {
  //? Store element with indices in object. Find indices of any 2 elements that sum up to target
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[arr[i]] = i;
  }
}
// console.log(twoSum([1,2,4], 6));

function maxProfit(prices) {
  //? Keep track of min, max. Find max possible difference b/w 2 prices
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}
// console.log(maxProfit([1,1,3,2,7]));

function containsDuplicate(arr) {
  //? Store integer counts in object to check for duplicates
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = count[arr[i]] + 1 || 1;
    if (count[arr[i]] > 1) return true;
  }
  return false;
}
// console.log(containsDuplicate([1,3,5]));

function productExceptSelf(arr) {
  //? Iterate backwards, then forwards, multiplying every element with every other element
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
// console.log(productExceptSelf([1,3,4,6]));

// Find length of maximum subarray 
function maxSubarray(arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i], arr[i] + arr[i-1]);
    arr[i] = max;
  }
  return Math.max(...arr);
}
// console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));

function findDuplicate(arr) {
  //? Use 2 pointers in linked list to detect loop. Entry point of loop will always be duplicate
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
// console.log(findDuplicate([1,1,2,3,4]));

function maxProductSubarray(nums) {
  //? Keep track of currMin, currMax by multiplying every element with min, max
  let result = -Number.MAX_VALUE;   // Handle -ve * -ve
  let min = 1, max = 1;
  for (let num of nums) {
    let currMin = Math.min(num, num * min, num * max);
    let currMax = Math.max(num, num * min, num * max);

    [min, max] = [currMin, currMax];
    result = Math.max(result, currMax);
  }
  return result;
}
console.log(maxProductSubarray([-4, 3, -2]));

function minimumRotatedArray(arr) {

}

function removeDuplicates(arr) {

}

function maxArea(heights) {

}

function searchRotated(arr) {

}

function mergeSortedArrays(nums1, m, nums2, n) {

}