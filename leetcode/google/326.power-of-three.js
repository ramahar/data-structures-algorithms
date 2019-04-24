/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 *
 * https://leetcode.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (41.48%)
 * Total Accepted:    178.5K
 * Total Submissions: 429.7K
 * Testcase Example:  '27'
 *
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1:
 * 
 * 
 * Input: 27
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: 9
 * Output: true
 * 
 * Example 4:
 * 
 * 
 * Input: 45
 * Output: false
 * 
 * Follow up:
 * Could you do it without using any loop / recursion?
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //Math.log10 gives the value of base 10 logarithms of number
    let result = Math.log10(n) / Math.log10(3);
    // If a number is a power of 3, log of number/log of 3 will return whole number
    return result % 1 === 0;
};
