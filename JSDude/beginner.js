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

// Reverse a string
function reverse(str) {
  let result = '';
  for (let i = str.length-1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Merge 2 sorted arrays 
function mergeSortedArrays(a, b) {

}
