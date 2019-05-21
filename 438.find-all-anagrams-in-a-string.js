/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 * Given a string s and a non-empty string p, 
 * find all the start indices of p's anagrams in s.
 * Input:
 * s: "cbaebabacd" p: "abc"
 * Output: [0, 6]
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Sliding window 
var findAnagrams = function(s, p) {
    let result = [];
    let pLength = p.length;
    let sLength = s.length;

    // Create 2 empty arrays filled with 0's
    let pWindow = new Array(26).fill(0);
    let sWindow = new Array(26).fill(0);

    // charCodeAt returns a--> 97, b --> 98, c--> 99, etc
    [...p].forEach(char => {
      pWindow[char.charCodeAt(0) - 97]++;
    });

    [...s].forEach((char, index) => {
      // jump into next position, and minus the previous chart from window
      if (index >= pLength) sWindow[s.charCodeAt(index-pLength)-97]--;
      sWindow[char.charCodeAt(0)-97]++
      // compare two strings
      if (pWindow.join()===sWindow.join()) result.push(index+1-pLength);
    });
    return result;
};
