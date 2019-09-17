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

function removeDuplicates(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = i - count;
    
    if (nums[i] === nums[i-1]) count++;   
    else nums[diff] = nums[i];    // Replace duplicate element in place
  }
  return nums.length - count;
}
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

function maxArea(height) {
  let start = 0, end = height.length - 1;
  let max = 0;

  while (start < end) {
    let minHeight = Math.min(height[start], height[end]);
    let area = minHeight * (end - start);
    max = Math.max(max, area);

    if (height[start] > height[end]) end--;   // Narrow down container right -> left 
    else start++;
  }
  return max;
}

// STRING 
function validAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function isPalindrome(s) {
  let formatted = s.replace(/\W/g, '');
  let reversed = s.split('').reverse().join('');
  return formatted.toLowerCase() === reversed.toLowerCase();
}

function validParentheses(s) {
  let pairs = {

  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (pairs[el]) stack.push(pairs[el]);
    else {
      if (el !== stack.pop()) return false;
    }
  }
  return stack.length === 1;
}

function longestSubstring(s) {
  let max = 0;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let index = result.indexOf(char);
    result = result.slice(index + 1);
    max = Math.max(max, result.push(char));
  }
  return max; 
}

function palindromicSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    helper(s, i, i);
    helper(s, i, i+1);
  }
  return count;

  function helper(s, low, high) {
    // Bound check and palindrome check
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      count++;
      low--;
      high++;
    }
  }
}