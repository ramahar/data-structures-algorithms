// Check if a number is prime
function isPrime(num) {
  if (num === 1 || num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true; 
}
// console.log(isPrime(137));

// Find all prime factors of a number 
function primeFactors(num) {
  let result = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}
// console.log(primeFactors(10));

// Find nth fibonacci number
function fibonacci(n) {
  let memo = {};
  if (memo[n]) return memo[n];

  if (n === 0 || n === 1) return n;
  memo[n] = fibonacci(n-1) + fibonacci(n-2);
  return memo[n];
} 
// console.log(fibonacci(12));

// Find the greatest common divisor of 2 numbers
function greatestCommonDivisor(a, b) {
  if (b === 0) return a;
  // Euclidean algorithm to find GCD 
  else return greatestCommonDivisor(b, a%b);
}
// console.log(greatestCommonDivisor(14, 21));

// Remove duplicates from an array
function removeDuplicate(arr) {
  let unique = {};
  let result = [];
  arr.forEach(el => {
    if(!unique[el]) {
      result.push(el);
      unique[el] = true;
    }
  });
  return result;
}
// console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));

// Reverse a string using recursion 
function reverse(str) {
  if (str === "") return "";
  else return reverse(str.substring(1)) + str.charAt(0);
}

// Reverse a sentence in place
function reverseSentence(str) {
  return str.split(" ").reverse().join(" ").split("").reverse().join("");
}
// console.log(reverseSentence("Hello World"));

// Find first non-repeating character in string
function firstNonRepeat(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (var char in charCount) {
    if (charCount[char] === 1) return char;
  }
}
// console.log(firstNonRepeat("abacddbec"));

// Check if a string is a palindrome 
function isPalindrome(str) {
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] === str[str.length-1-i]) {
      return true;
    } else {
      return false; 
    }
  }
}
// console.log(isPalindrome("madam"));

// Given unsorted array, check if any 2 numbers will sum up to target
function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (obj[diff]) return true;
    else obj[nums[i]] = true;
  }
  return false; 
}
// console.log(twoSum([6,4,3,2,1,7], 9));

// Given array, find the highest sum of 2 numbers
function highestSum(nums) {
  let first = 0; second = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return first + second;
}
// console.log(highestSum([7, 0, -4, 5, 2, 3]));