// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Given nums = [2, 7, 11, 15], target = 9,
function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (obj[diff] !== undefined) return [obj[diff], i];
    obj[nums[i]] = i; 
  }
}
// console.log(twoSum([2,7,11,15], 9));