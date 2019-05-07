/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.11%)
 * Total Accepted:    881.1K
 * Total Submissions: 3.1M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let max = 0; 
  let chars = [];

  for (let c of s) {
    // Remove everything before when duplicate found -> e.g. awke + w -> ke + w
    chars = chars.slice(chars.indexOf(c) + 1);
    // Push returns array length. Update max after adding character
    max = Math.max(chars.push(c), max);
  }
  return max;
}

 // Solution 2
 // Time complexity O(n), Space complexity O(min(m, n)), m is the size of the hash map
// pwwkew
//   i j
//   3 5
// map { p: 1, w: 6, k: 4, e: 5 }

// var lengthOfLongestSubstring = function(s) {
//   let max = 0;
//   let map = {};

//   for (let i = 0, j = 0; j < s.length; j++) {
//     let char = s[j];

//     if (map[char]) i = Math.max(map[char], i);

//     max = Math.max(max, j - i + 1);
//     map[char] = j + 1;
//   }

//   return max;
// };

// Alternate solution
// const lengthOfLongestSubstring = s => {
//   // keeps track of the most recent index of each letter.
//   const map = {};
//   // keeps track of the starting index of the current substring.
//   var left = 0;
  
//   return s.split('').reduce((max, v, i) => {
//       // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
//       left = map[v] >= left ? map[v] + 1 : left;
//       // updates last recorded index of letter to the most recent index.
//       map[v] = i;
      
//       // indices of current substring is (idx - leftIdx, idx).
//       // +1 because if your substring starts and ends at index 0, it still has a length of 1.
//       return Math.max(max, i - left + 1);
//   }, 0)
// };
