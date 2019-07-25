/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */

 // Greedy approach: Loop through once and keep track of max unique substring
// length. Can use either array or hash map. O(n)
var lengthOfLongestSubstring = function(s) {
  let result = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    //? IMPORTANT STEP 
    result = result.slice(result.indexOf(char) + 1)
    max = Math.max(result.push(char), max);   // Push returns length of array
  }
  return max;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));

 // Brute force: Loop through string twice, checking every substring
 // against every other substring, and finding max length where
 // substring is unique
 // Time complexity: O(n^3)   [O(n) for helper]
var lengthOfLongestSubstring1 = function(s) {
    let result = 0; 
    let max = 0;

    for (let i = 0; i < s.length-1; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (allUnique(s.substring(i, j))) {
          // Store length of substring, then compare with max
          result = s.substring(i, j).length;
          if (result > max) max = result;
        }
      }
    }
    return max;
};

var allUnique = function(str) {
  // Create set from str. Set won't have any duplicates
  const set = [...new Set(str)];
  return (set.length === str.length) ? true : false; 
}
