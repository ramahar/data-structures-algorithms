// Given an array of integers, find if the array contains any duplicates.
// Input: [1,2,3,1]
// Output: true
function containsDuplicate(nums) {
  let dups = {};
  for (let i = 0; i < nums.length; i++) {
    if (dups[nums[i]]) return true;
    dups[nums[i]] = nums[i];
  }
  return false;
}
console.log(containsDuplicate([1,2,3,1]))