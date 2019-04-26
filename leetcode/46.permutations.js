/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time complexity: O(n!)
var permute = function(nums) {
  // Base case
  if (nums.length <= 1) return [nums];
  let result = [];
  // Grab first number, prepend it to all permutations without that number in it
  nums.forEach((num, i) => {
    let curr = nums.slice(0, i);
    let remaining = nums.slice(i+1);
    let permutations = permute(curr.concat(remaining));
    // Combine each element with remaining elements in inner arrays  
    permutations.forEach(innerArr => result.push([num].concat(innerArr)));
  })
  return result;
};

// console.log(permute([1,2,3]));
