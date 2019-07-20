// Find first non-repeating/unique character in string. O(n) ?
function firstNonRepeat(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return -1;
}
console.log(firstNonRepeat("abacddbec"));

// Faster Alternate 
function firstUnique(str) {
  
}
