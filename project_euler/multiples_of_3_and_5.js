// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

//? IDEA: Find numbers which meet: (num%5 === 0 || num%3 === 0)
//? Then find sum of all such numbers
function multiples() {
  return Array.from(Array(1000).keys())
  .filter(el => el % 5 === 0 || el % 3 === 0)
  .reduce((acc, n) => acc + n)
}
console.log(multiples());