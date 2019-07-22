// Given an array of integers, find if the array contains any duplicates.
// Input: [1,2,3,1]
// Output: true
function containsDuplicate(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
}
// console.log(containsDuplicate([0,4,5,0,3,6]));
