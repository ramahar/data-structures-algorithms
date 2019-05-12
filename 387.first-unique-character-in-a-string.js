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
var firstUniqChar = function(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // Duplicates
      map.set(s[i], 2);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
