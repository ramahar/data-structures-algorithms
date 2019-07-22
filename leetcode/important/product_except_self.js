// Given an array nums of n integers where n > 1,  return an array 
// output such that output[i] is equal to the product of all the 
// elements of nums except nums[i].
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
function productExceptSelf(nums) {
  let result = [];
  let leftMult = 1;
  let rightMult = 1;

  for (let i = nums.length-1; i >= 0; i--) {
    result[i] = rightMult;
    rightMult *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    result[j] *= leftMult;
    leftMult *= nums[j];
  }
  return result;
}
// console.log(productExceptSelf([1,2,3,4]));