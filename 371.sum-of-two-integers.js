/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
// Example:
// Given a = 1 and b = 2, return 3.
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// Recursive bit manipulation. Time: O(n)
var getSum = function(a, b) {
    let sum = a ^ b;  // XOR gets sum bits without carry
    let carry = (a & b) << 1; // AND + shift left 1 gets carry

    if (!carry) return sum;
    return getSum(sum, carry);
};
