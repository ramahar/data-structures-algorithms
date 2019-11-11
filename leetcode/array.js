function twoSum(arr, target) {
  //? Store element with indices in object. Find indices of any 2 elements that sum up to target
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[arr[i]] = i;
  }
}
console.log(twoSum([1,2,4], 6));

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
console.log(maxProfit([1,1,3,2,7]));

function containsDuplicate(arr) {
  //? Store integer counts in object to check for duplicates
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = count[arr[i]] + 1 || 1;
    if (count[arr[i]] > 1) return true;
  }
  return false;
}
console.log(containsDuplicate([1,3,5]));

function productExceptSelf(arr) {
  //? Iterate backwards, then forwards, multiplying every element with every other element
  let result = [];
  let left = 1, right = 1;
}

function maxSubarray(arr) {

}

function findDuplicate(arr) {

}

function maxProductSubarray(arr) {

}

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