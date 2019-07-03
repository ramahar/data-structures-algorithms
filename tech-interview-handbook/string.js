// Given two strings s and t , write a function to determine if t is an anagram of s.
function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}
// console.log(isAnagram("anagram", "nagaram"));