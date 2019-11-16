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

// Find the minimum window in S which will contain all the characters in T
var minWindow = function(s, t) {
  var result = '';
   var map = {};
   for (let char of t) {
     map[char] = (map[char] || 0) + 1;
   }
   var count = Object.keys(map).length;

   var l = 0;
   var r = -1;
   
   while (r < s.length) {
       if (count === 0) {
           // good condition. l~r contains t
           if (!result || r - l + 1 < result.length) {
               result = s.slice(l, r + 1);
           }
           
           // get rid of curr ch and then move l
           if (map[s[l]] !== undefined) {
               map[s[l]]++;
           }
           if (map[s[l]] > 0) {
               count++;
           }
           l++;
           
       } else {
           // l~r doesn't contain t. Move r and add new ch
           r++;
           if (map[s[r]] !== undefined) {
               map[s[r]]--;
           }
           if (map[s[r]] === 0) {
               count--;
           }
       }
   }
   return result;
};