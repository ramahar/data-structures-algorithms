/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.12%)
 * Total Accepted:    552K
 * Total Submissions: 1.5M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //Pair object with matching brackets as key-value pairs 
    var pairs = {
      "(":")",
      "{":"}",
      "[":"]"
    }

    var stack = [];
    for (var i of s) {
      //Push to stack if opening bracket 
      if (pairs[i]) {
        stack.push(pairs[i]);
      }
      // If character does not exist in pair, return false
      //If the closing bracket in the string matches the value that we pushed in our stack, pop that value out of the stack
      if (!pairs[i] && i !== stack.pop()) {
        return false;
      }
    }
    //Final stack length should be 0 if matching pair found
    return stack.length === 0;
};
