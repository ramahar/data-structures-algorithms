// Given a set of candidate numbers (without duplicates) and a target number (target), 
// find all unique combinations in candidates where the candidate numbers sums to target.
function combinations(candidates, target) {
  let result = [];
  backtrack(0, 0, []);
  return result;

  function backtrack(index, sum, buffer) {
    //? Use buffer to create unique candidate combinations
    if (sum > target) return;
    if (sum === target) result.push(buffer.slice());
    for (let i = index; i < candidates.length; i++) {
      buffer.push(candidates[i]);
      backtrack(i, sum + candidates[i], buffer);
      buffer.pop();
    }
  }
}
// console.log(combinations([2,3,5], 8));

// Given a collection of distinct integers/characters, return all possible permutations.
function permutations(nums) {
  let result = [];
  backtrack([], nums);
  return result;

  function backtrack(current, remaining) {
    if (remaining.length === 0) result.push(current.slice());
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      let combo = remaining.slice(0, i).concat(remaining.slice(i + 1));   
      backtrack(current.slice(), combo);
      current.pop();
    }
  }
}
// console.log(permutations([1,2,3]));

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
function generateParentheses(n) {
  let result = [];
  generate(n, n, '');
  return result;

  function generate(left, right, str) {
    if (!left && !right && str.length) {
      return result.push(str);
    }
    if (left) generate(left - 1, right, str + '(');
    // If right > left, add to left to balance parentheses
    if (right > left) generate(left, right - 1, str + ')');
  }
}
// console.log(generateParentheses(3));

// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
function combinations(n, k) {
  let result = [];
  backtrack([], 1);
  return result;

  function backtrack(current, index) {
    if (current.length > k) return;
    if (current.length === k) {
      result.push(current.slice());
      return;
    }

    for (let i = index; i <= n; i++) {
      backtrack(current.concat(i), i + 1);
    }
  }
}
// console.log(combinations(4, 2));

// Given a 2D board and a word, find if the word exists in the grid 
function exist(board, word) {
  word = word.split('');
  
  function verify(row, col, matrix, path) {
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] !== word[path] || path > word.length) {
      return false;
    }

    matrix[row][col] = '#';
    path++;
    
    if (path === word.length) return true;
    if(verify(row-1, col, matrix, path)) return true;
    if(verify(row+1,col, matrix, path)) return true;
    if(verify(row, col-1, matrix, path)) return true;
    if(verify(row, col+1, matrix, path)) return true;

    matrix[row][col] = word[--path];  // Backtrack
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (verify(i, j, board, 0)) return true; 
    }
  }
  return false;
}
// console.log(exist([
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ], "ABCCED"));