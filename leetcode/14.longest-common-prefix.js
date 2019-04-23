/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.17%)
 * Total Accepted:    435.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) return '';

    return strs.reduce((prev, next) => {
      let i = 0;
      while (prev[i] && next[i] && prev[i] === next[i]) {
        i++;
      }
      return prev.slice(0, i);
    })
};

// FASTER solution 
var longestCommonPrefix = function(arr) {
  if(!arr.length) return ''
  if(arr.length == 1) return arr[0]
      
  var longestStr = arr[0];
  var length = longestStr.length;
  
  while(length > 0) {
      for(var i = 1; i < arr.length; i++){
          if (arr[i].substr(0, length) != longestStr) {
              break
          } else {
              if(i == arr.length - 1) {
                  return longestStr.substr(0, length);
              }
          }
      }
      
      length--
      longestStr = longestStr.substr(0, length)
  }
  return '';
}