/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  let result = [];
  dfs([], 0);

  function dfs(current, index) {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      dfs(current.concat(nums[i]), i+1);
    }
  }
  return result;
}

 // Recursive solution
var subsets1 = function(nums) {
    if (nums.length === 0) return [[]];
    else {
      // Recursive call on everything except first element
      let rest = subsets(nums.slice(1));
      let newSets = rest.map(
        (set) => [nums[0], ...set]
      );
      return [...rest, ...newSets];
    }
};
