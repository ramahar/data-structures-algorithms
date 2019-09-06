// Given two strings s and t , write a function to determine if t is an anagram of s.
function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}
// console.log(isAnagram("anagram", "nagaram"));

// Given a string, determine if it is a palindrome
function isPalindrome(str) {
  let formatted = str.toLowerCase().replace(/\W/g, '');
  let reversed = str.split('').reverse().join('');

  return formatted.toLowerCase() === reversed.toLowerCase();
}
// console.log(isPalindrome("A man, a plan, a canal. Panama"));

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
    if (s.indexOf(char) === s.lastIndexOf(char)) return i;
  }
  return -1;
}
// console.log(firstUnique('aabbeeuc'));

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

// Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
  let result = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    result = result.slice(result.indexOf(char) + 1);
    max = Math.max(max, result.push(char));
  }
  return max;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));

// Given array of strings, group anagrams together
var groupAnagrams = function(strs) {
  let map = {};
  
  for (let str of strs) {
    let key = str.split('').sort().join('');
    // No anagrams to group
    if (!map[key]) map[key] = [];
    
    map[key].push(str);
  }
  // Group of anagrams is stored as object values 
  return Object.values(map);
};
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Given a string, count how many palindromic substrings in this string.
var countSubstrings = function(s) {
  let count = 0;
  let substring;
  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {
      substring = s.substring(i,j+1);
      if(isPalindrome(substring)) count++;   
    }
  }
  return count;
};
function isPalindrome(s){
  return s === s.split('').reverse().join('');
}

// Given a string s, find the longest palindromic substring in s
var longestPalindrome = function(s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
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
};
// console.log(longestPalindrome("babad"));

// Find all permutations of a string
function permutations(s) {
  
}






// ---------------- PRACTICE -------------------
function validAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function validPalindrome(s) {
  let formatted = s.replace(/\W/g, '');
  let reversed = formatted.split('').reverse().join('');

  return formatted.toLowerCase() === reversed.toLowerCase();
}