// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n) {
  if (n === 0) return 2;
  if (n === 1) return 1;

  return lucasNumber(n-1) + lucasNumber(n-2);
}

// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {
  if (!array.length) return 0;

  return array[0] + sumArray(array.slice(1));
}

// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
// reverseString("c")           // => "c"
// reverseString("internet")    // => "tenretni"
// reverseString("friends")     // => "sdneirf"
function reverseString(str) {
  if (str.length <= 1) return str;

  let remaining = str.slice(0, str.length-1);
  return str[str.length-1] + reverseString(remaining);
}
