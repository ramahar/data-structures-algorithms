function twoSum(arr, target) {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (map[diff] !== undefined) return [map[diff], i];
		map[arr[i]] = i;
	}
}
// console.log(twoSum([1,3,5], 8));

function maxProfit(prices) {
	let min = prices[0];
	let max = 0;
	
	for (let i = 1; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		
	}
	return max;
}
// console.log(maxProfit([1,2,4]));

function containsDuplicate(arr) {
  let set = new Set(arr);
  return set.size !== arr.length;
}
// console.log(containsDuplicate([1,2,2]));

function productExceptSelf(arr) {
	let result = [];
	let left = 1, right = 1;
	for (let i = arr.length-1; i >= 0; i--) {
		result[i] = right;
		right *= arr[i];
	}
	for (let j = 0; j < arr.length; j++) {
		result[j] *= left;
		left *= arr[j];	
	}
	return result;
}
// console.log(productExceptSelf([1,2,4]));

function maxSubArray(arr) {
	for (let i = 1; i < arr.length; i++) {
		let max = Math.max(arr[i], arr[i] + arr[i-1]);
		arr[i] = max;
	}
	return Math.max(...arr);
}
// console.log(maxSubArray([2,1,4,3]));

function findDuplicate(arr) {
	let slow = arr[0];
	let fast = arr[slow];
	while (slow !== fast) {
		slow = arr[slow];
		fast = arr[arr[fast]];
	}
	fast = 0;
	while (slow !== fast) {
		slow = arr[slow];
		fast = arr[fast];
	}
	return slow;
}
// console.log(findDuplicate([1,2,2]));

function maxProduct(arr) {
  let result = -Number.MAX_VALUE;   // Handles negative * negative 
  let min = 1, max = 1;
  for (let el of arr) {
    currMin = Math.min(el, el * min, el * max);
    currMax = Math.max(el, el * min, el * max);

    [min, max] = [currMin, currMax];
    result = Math.max(result, max);
  }
  return result;
}
// console.log(maxProduct([-2,3,-4]))

function findMin(nums) {
  let min = nums[nums.length-1];  // Compare all elements with last element 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) return nums[i];
  }
}
