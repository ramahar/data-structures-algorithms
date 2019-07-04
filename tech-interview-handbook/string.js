// Given two strings s and t , write a function to determine if t is an anagram of s.
function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}
// console.log(isAnagram("anagram", "nagaram"));

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid. (Open brackets must be closed by same type of brackets)
function validParentheses(s) {
  let pairs = {
    "(":")",
    "{":"}",
    "[":"]"
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (pairs[el]) stack.push(pairs[el]);
    else {
      if (el !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
}
// console.log(validParentheses("(){}[]"));

// Given a string, determine if it is a palindrome
function isPalindrome(str) {
  let formatted = str.replace(/\W/g, '');
  let reversed = str.split('').reverse().join('');

  return formatted.toLowerCase() === reversed.toLowerCase();
}
// console.log(isPalindrome("ababa"));

// Reverse a string using recursion
function reverse(s) {
  if (s === "") return "";

  return reverse(s.substring(1)) + s.charAt(0);
}
// console.log(reverse("hello"));

// Given a string, find the index of first unique character
function firstUnique(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i;
    }
  }
  return -1;
}
// console.log(firstUnique('aabbeeuc'));

// Given a string s, find the longest palindromic substring in s
function longestPalindrome(s) {

}
// https://leetcode.com/problems/longest-palindromic-substring/discuss/2926/Share-my-concise-JavaScript-solution

// Find all permutations of a string
function permutations(s) {
  
}