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

// Return length of maximum subarray 
function maxSubarray(arr) {

}