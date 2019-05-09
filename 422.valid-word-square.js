/*
Given a sequence of words, check whether it forms a valid word square.
A sequence of words forms a valid word square
if the kth row and column read the exact same string, where 0≤ k < max(numRows, numColumns).
Note:
The number of words given is at least 1 and does not exceed 500.
Word length will be at least 1 and does not exceed 500.
Each word contains only lowercase English alphabet a - z.
Example 1:
  Input: [
    "abcd",
    "bnrt",
    "crmy",
    "dtye"
  ]
Output:
  true
*/

// Time: O(mn) where m = rows, n = columns 
var validWordSquare = function(words) {
  if (words === null || words.length === 0) return false; 

  // Loop through and check if rows match columns 
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
        if (j >= words.length || i >= words[j].length || words[i][j] !== words[j][i]) { 
            // make sure j < words.length, make sure we have words[j]
            // make sure i < words[j].length, because we are checking words[j][i]
            return false;
        }
    }
}
return true;
}

// console.log(validWordSquare([
//   "abcd",
//   "bnrt",
//   "crmy",
//   "dtye"
// ]))