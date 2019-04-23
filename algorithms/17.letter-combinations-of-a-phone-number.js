/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (40.82%)
 * Total Accepted:    370.9K
 * Total Submissions: 903.1K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const mappings = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
    };

    // Base Case for recursion
    if (!digits || digits.length === 0) return [];
    if (digits.length === 1) return mappings[digits];

    let result = [];
    // Recursive call on first element + Rest of elements 
    let set1 = letterCombinations(digits.substr(0, 1))
    let set2 = letterCombinations(digits.substr(1))

    // Push letter combinations to result array 
    for (let i = 0; i < set1.length; i++) {
      for (let j = 0; j < set2.length; j++) {
        result.push(set1[i] + set2[j]);
      }
    }
    return result;
};
