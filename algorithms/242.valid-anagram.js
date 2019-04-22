/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.36%)
 * Total Accepted:    325K
 * Total Submissions: 628.6K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {};
    // If character from s exists in object, increment char count 
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1)
    // If character from t exists in object, decrement char count 
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1)
    // If all values in object are 0, strings are anagrams
    return Object.keys(map).every(key => map[key] === 0)
};
// Time complexity: O(m + n) where m, n are lengths of strings 

// Inefficient solution
// return s.split('').sort().join('') === t.split('').sort().join('')
