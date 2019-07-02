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
// console.log(twoSum([2,7,11,15], 9))

// Given an array of stock prices, if only permitted to complete at most one transaction,
// (i.e buy one and sell one share) design an algorithm to find the max profit
function maxProfit(prices) {
  let min = Infinity; 
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    // Keep track of lowest number and highest profit in every iteration 
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}
// console.log(maxProfit([7,1,5,3,6,4]));

// Given an array of integers, find if the array contains any duplicates.
function containsDuplicate(nums) {
  return (new Set(nums).size !== nums.length);
}
// console.log(containsDuplicate([1,2,3,1]));
