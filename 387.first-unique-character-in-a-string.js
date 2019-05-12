/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */
/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity: O(n)
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i ++) {
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
        return i;
      }
    }
    return -1;
};

// Alternate with Hash map 
