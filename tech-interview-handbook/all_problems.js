// ARRAY
function twoSum(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (obj[diff] !== undefined) return [obj[diff], i];
    obj[arr[i]] = i;
  }
}
// console.log(twoSum([1,2,6], 7));

function maxProfit(prices) {
  let min = prices[0], max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}
// console.log(maxProfit([1, 2, 5, 7]));

function productExceptSelf(arr) {
  let result = [], left = 1, right = 1;

  for (let i = arr.length-1; i >= 0; i--) {
    result[i] = right;
    right *= arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    result[j] *= left;
    left *= arr[i];
  }
  return result;
}
// console.log(productExceptSelf([1,2,4]));

function maxSubArray(arr) {
  let max = 0; 
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i], arr[i] + arr[i-1]);
    arr[i] = max;
  }
  return max; 
}
// console.log(maxSubArray([1, 6, 2, 4]));

function missingNumber(arr) {
  let sum = 0, expected = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    expected += i + 1;
  }
  return expected - sum;
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
// console.log(findDuplicate([1,2,2,5]));

function maxProduct(nums) {
  let result = -Number.MAX_SAFE_INTEGER;
  let min = 1, max = 1;

  for (let num of nums) {
    let currMin = Math.min(num, min * num, max * num);
    let currMax = Math.max(num, min * num, max * num);

    [min, max] = [currMin, currMax];
    result = Math.max(result, max);
  }
  return max; 
}

function findMin(nums) {
  let min = nums[nums.length-1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) return nums[i];
  }
}


// STRING
function isPalindrome(s) {

}

function lengthOfLongestSubstring(s) {
}

function countSubstrings(s) {
  
}
