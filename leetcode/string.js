function validPalindrome(str) {
  let formatted = str.replace(/\W/g, '');
  let reversed = str.split('').reverse().join('');
  return formatted.toLowerCase() === reversed.toLowerCase();
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;    // Decrement char count after compared 
  }
  return true;
}

function validParentheses(str) {
  let pairs = {
    "(":")",
    "{":"}",
    "[":"]"
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (pairs[el]) stack.push(pairs[el]);
    else {
      if (el !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
}

function generateParentheses(n) {
  let result = [];
  generate(n, n, '');
  return result;

  function generate(left, right, str) {
    if (!left && !right && str.length) result.push(str);

    if (left) generate(left - 1, right, str + '(');
    if (right > left) generate(left, right - 1, str + ')');
  }
}

// Given a string, find the length of the longest substring without repeating characters.
function longestSubstring(str) {
  let max = 0;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = result.indexOf(char);
    result = result.slice(index + 1);
    max = Math.max(max, result.push(char));
  }
  return max;
}

function groupAnagrams(strs) {
  let map = {};
  for (let str of strs) {
    let key = str.split('').sort().join('');

    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}

// Count how many palindromic substrings are in the string 
function palindromicSubstrings(s) {
  //? Recurse for single digit length palindromes + even digit lengths with lower, upper bounds (index)
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    helper(s, i, i);
    helper(s, i, i + 1);
  }
  return count;

  function helper(s, low, high) {
    while (low >= 0 || high <= s.length || s[low] === s[high]) {
      count++;
      low--;
      high++;
    }
  }
}

// Find the longest palindromic substring 
function longestPalindrome(s) {
  //? Use 2 pointers to find palindromes, keep expanding to find longest palindrome
  let result = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > result.length) {
        result = s.slice(left + 1, right);
      }
    }
  }
  return result;
}
// console.log(longestPalindrome("babad"));

// Given 2 binary strings, return their sum as a string
function addBinary(a, b) {
  //? Loop backwards, keep track of carry, digits and string conversion
  let result = '';
  let carry = 0;
  let i = a.length-1;
  let j = b.length-1;
  while (i >= 0 || j >= 0) {
    let aDigit = a[i] || '0';
    let bDigit = b[j] || '0';

    let temp = parseInt(aDigit) + parseInt(bDigit) + carry;
    let digit = (temp % 2);
    carry = Math.floor(temp/2);

    result = digit + result;
    i--;
    j--;
  }
  if (carry !== 0) result = carry + result;
  return result;
}
// console.log(addBinary("11", "1"));

// Find longest common prefix among an array of strings
function longestCommonPrefix(arr) {
  // Iterate through first string, compare characters one-by-one with other strings 
  if (arr.length === 0) return '';
  for (let i = 0; i < arr[0].length; i++) {
    for (let str of arr) {
      if (str[i] !== arr[0][i]) return str.slice(0, i);
    }
  }
  return arr[0];
}
// console.log(longestCommonPrefix(["flower","flow","flight"]));

// Find the minimum window in S which will contain all the characters in T
function minimumSlidingWindow(s, t) {

}
// console.log(minimumSlidingWindow("ADOBECODEBANC", "ABC"));