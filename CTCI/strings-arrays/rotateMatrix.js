// Given an image represented by an NxN matrix, where each pixel in the image 
// is 4 bytes, write a method to rotate the image by 90 degrees. 
// Can you do this in place?

// In place rotation 
function rotateMatrix(matrix) {
  // Reverse matrix then swap rows and columns 
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix;
}

/* TEST */
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];

console.log(rotateMatrix(testMatrix));