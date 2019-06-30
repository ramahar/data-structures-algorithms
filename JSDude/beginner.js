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

// Given an unsorted array containing n distinct numbers, find the one number missing from the array
function missingNumber(nums) {

}
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));