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
    if (!strs.length) return '';

    // Iterate through first word in array and check prefix in other words
    for (let i = 0; i < strs[0].length; i++) {
        for (let string of strs) {
            // Return prefix if no more matching chars 
            if (string[i] !== strs[0][i]) {
                return string.slice(0, i);
            }
        }
    }
    // First word in array will be the longest prefix 
    return strs[0];
};

// Alternate
var longestCommonPrefix1 = function(arr) {
    if (!strs.length) return "";
    let first = strs[0];
    let result = "";
  
    let i = 0;
    while (true) {
      let char = first[i];
  
      // Compare characters in first word with rest of words 
      for (let str of strs) {
        if (!str[i]) return result;
        if (str[i] !== char) return result;
      }
      // Adds char to result string if it matches other words    
      result += char;
      i++;
    }
}

// FASTER solution 
var longestCommonPrefix2 = function(arr) {
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
