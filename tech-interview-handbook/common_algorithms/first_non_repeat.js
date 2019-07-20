// Find first non-repeating/unique character in string. Worst O(n^2)?
function firstNonRepeat(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return -1;
}
// console.log(firstNonRepeat("abacddbec"));

// Faster Alternate. O(n)
function firstUnique(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) count[char]++;
    else count[char] = 1;
    console.log(count);
  }

  for (let char in count) {
    if (count[char] === 1) return char;
  }
}
// console.log(firstUnique("abacddbec"));
