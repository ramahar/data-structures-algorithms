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

function checkPermutation(str1, str2) {
  if (str1.length !== str.length) return false;
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
// console.log(checkPermutation('abc', 'bac'))

// Edits: insert a character, remove a character, or replace a character. Given two strings, 
// write a function to check if they are one edit (or zero edits) away.
// pale, ple -> true
function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let edited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (edited) return false;
      if (str1.length > str2.length) return false;
      if (str1.length < str2.length) return false;
    }
    edited = true;
  }
  return true;
}
// console.log(oneAway('pale', 'pal'));