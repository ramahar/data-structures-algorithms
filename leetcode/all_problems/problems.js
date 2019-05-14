// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Example: 
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[nums[i]] = i; 
  }
}
// console.log(twoSum([2, 7, 11, 15], 9));

// Given a string, find the length of the longest substring without repeating characters.
// Example:
// Input: "abcabcbb"  Output: 3
function lengthOfLongestSubstring(s) {

}

// Given a 32-bit signed integer, reverse digits of an integer.
// Example:
// Input: 123   Output: 321
function reverse(x) {
  let reversed = x.toString().split('').reverse().join('');
  let num = parseInt(reversed);
  if (res < -(2 ** 31) || res > 2 ** 31 - 1) return 0;
  return Math.sign(x) * num; 
}
console.log(reverse(123));