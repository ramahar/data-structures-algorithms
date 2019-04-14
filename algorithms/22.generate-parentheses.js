import { compose } from "async";

/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (53.77%)
 * Total Accepted:    320.8K
 * Total Submissions: 593K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //Result must contain n pairs of every parentheses 
    let result = [];
    compose(n, n, '');
    return result;

    function compose(left, right, str) {
      //Recursive base case 
      if (!left && !right && str.length) result.push(str);
      if (left) compose(left-1, right, str+'(');
      if (right > left) compose(left, right-1, str+')');
    }
};
