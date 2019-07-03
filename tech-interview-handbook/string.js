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
