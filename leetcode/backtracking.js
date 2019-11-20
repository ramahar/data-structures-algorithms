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