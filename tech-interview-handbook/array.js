// Array Practice Questions
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
function twoSum(nums, target) {
  let map = {};
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (map[diff] !== undefined) return [map[diff], i];
      map[nums[i]] = i;
    }
}
console.log(twoSum([2,7,11,15], 9))
