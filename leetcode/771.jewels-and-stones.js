/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 *
 * https://leetcode.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (82.87%)
 * Total Accepted:    232.5K
 * Total Submissions: 280.2K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 * You're given strings J representing the types of stones that are jewels, and
 * S representing the stones you have.  Each character in S is a type of stone
 * you have.  You want to know how many of the stones you have are also
 * jewels.
 * 
 * The letters in J are guaranteed distinct, and all characters in J and S are
 * letters. Letters are case sensitive, so "a" is considered a different type
 * of stone from "A".
 * 
 * Example 1:
 * 
 * 
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: J = "z", S = "ZZ"
 * Output: 0
 * 
 * 
 * Note:
 * 
 * 
 * S and J will consist of letters and have length at most 50.
 * The characters in J are distinct.
 * 
 * 
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let total = 0;
    const jewels = new Set();
    
    // Add jewels to set, then check if set contains the stones from S
    for(let i = 0; i < J.length; i++)
        jewels.add(J[i]);
    
    for(let i = 0; i < S.length; i++)
        if(jewels.has(S[i])) total++;
    
    return total;
};

// var numJewelsInStones = function(J, S) {
//     let num = 0;
//     for (let i = 0; i < S.length; i++) {
//         if (J.includes(S[i])){
//             num = num + 1;
//         };
//     }
//     return num;
// };
