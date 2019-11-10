function validPalindrome(str) {
  let formatted = str.replace(/\W/g, '');
  let reversed = str.split('').reverse().join('');
  return formatted.toLowerCase() === reversed.toLowerCase();
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  
}

function validParentheses(str) {

}

function generateParentheses(n) {

}

function longestSubstring(str) {

}

function palindromicSubstrings(s) {

}

function groupAnagrams(strs) {

}

function permutations(str) {

}


// Find the longest palindromic substring in s
function longestPalindrome(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    // Handles different palindromes like 'aba' and 'abba'
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j; 
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      } 
    }
  }
  return max;
}