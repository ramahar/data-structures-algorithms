// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?
function isUnique(str) {
  // O(n^2) if done without any data structures
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

// Using a Set data structure
function isUnique(str) {
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    if (set.includes(str[i])) return false;
    else set.add(str[i]);
  }
  return true;
}