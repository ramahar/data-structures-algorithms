/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * // Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
};

function generate_phrases(phrases) {
  let result = '';
  for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i].split(' ');
    let last = phrase[phrase.length-1];
    for (let j = i + 1; j < phrases.length-1; j++) {
      let second = phrases[j].split(' ')
      if (second[1] === last) {
        result = phrase.concat(second);
      }
    }
  }
  return result;
}


console.log(generate_phrases(['writing code', 'code rocks']));