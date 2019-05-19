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
  if (num < -(2 ** 31) || num > (2 ** 31)) return 0;
  return Math.sign(x) * num; 
}
// console.log(reverse(-123));

// Determine whether an integer is a palindrome.
// Example:
// Input: 121   Output: True
function isPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}
// console.log(isPalindrome(121));

// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
// Example:
// Input: "IX"  Output: 9
function romanToInt(s) {

}

// Write a function to find the longest common prefix string amongst an array of strings.
var longestCommonPrefix = function(strs) {
  // Pick first word, find matching characters in rest of words. If no matching found, return
  if (!strs.length) return "";
  let first = strs[0];
  let result = "";

  let i = 0; 
  while (true) {
    let char = first[i];

    // Compare characters in first word with remaining words
    for (let str of strs) {
      if (!str[i]) return result; 
      if (char !== str[i]) return result;
    }
    result += char;
    i++;
  }
  return result;
}
// console.log(longestCommonPrefix(['aa', 'aaasd', 'aad']))
