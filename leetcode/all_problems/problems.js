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

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// Input: "()[]{}"
// Output: true
function isValid(s) {
  let pairs = {
    "(":")",
    "{":"}",
    "[":"]"
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i]
    if (pairs[el]) {
      stack.push(pairs[el]);
      console.log(stack);
    } else {
      if (el !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
}
// console.log(isValid("()[]{}"));

// Merge two sorted linked lists and return it as a new list. The new list
// should be made by splicing together the nodes of the first two lists.
function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val > l2.val) [l1, l2] = [l2, l1];

  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
}

// Given n pairs of parentheses, write a function to generate all combinations
// of well-formed parentheses.
// Example: Input: n = 3
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
function generateParenthesis(n) {
  let result = [];
  combine(n, n, '');
  return result;

  function combine(left, right, str) {
    if (!left && !right) result.push(str);
    if (left) combine(left-1, right, str+'(');
    if (right > left) combine(left, right-1, str+')');
  }
}
// console.log(generateParenthesis(3));

// Given a sorted array nums, remove the duplicates in-place such that each
// element appear only once and return the new length.
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// Given an array nums and a value val, remove all instances of that value
// in-place and return the new length.
function removeVal(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums.length;
}
// console.log(removeVal([3,2,2,3], 3));

// Return the index of the first occurrence of needle in haystack, or -1 if
// needle is not part of haystack.
// Input: haystack = "hello", needle = "ll"
// Output: 2
function strStr(haystack, needle) {
  if (needle === "") return 0;
  if (haystack.includes(needle)) return haystack.indexOf(needle);
  return -1;
}
// console.log(strStr("hello", "ll"));
