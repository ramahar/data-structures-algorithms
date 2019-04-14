
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
    let result = [];
    combine(n, n, '');
    return result;

    //Function that combines two halves of array, adding the string at every step
    function combine(left, right, str) {
      //Recursive base case 
      if (!left && !right && str.length) result.push(str);
      //If left half exists, add opening parentheses to string, push to result
      if (left) combine(left-1, right, str+'(');
      //Else, add closing parentheses, push to result 
      if (right > left) combine(left, right-1, str+')');
    }
};
