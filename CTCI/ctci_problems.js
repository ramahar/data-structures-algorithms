// Determine if string has all unique characters
function isUnique(str) {
  let set = new Set();
  for (let char of str) {
    if (set.has(char)) return false;
    set.add(char);
  }
  return true;
}
// console.log(isUnique('abc'));