/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (30.21%)
 * Likes:    1210
 * Dislikes: 430
 * Total Accepted:    248.6K
 * Total Submissions: 804.7K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * Example 2:
 * 
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix, result = []) {
    if (matrix.length === 0) return result;

    for (let i = 0; i < matrix.length; i++) {
      let current = matrix[i];
      if (i === 0) {
        result = result.concat(current);
      } else {
        let last = current.pop();
        if (!last) return result;
        result.push(last);
        current.reverse();
      }
    }
    matrix.shift();
    return spiralOrder(matrix.reverse(), result);
};
// console.log(spiralOrder([
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
//  ]));
