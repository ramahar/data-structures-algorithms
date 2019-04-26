// Assumeyou have a method isSubstringwhich checks if oneword is a 
// substring of another. Given two strings, sl and s2, write code to 
// check if s2 is a rotation of sl using only one call to isSubstring 
// (e.g.,"waterbottle" is a rotation of "erbottlewat")

function stringRotation(string1, string2) {
  if (string1.length !== string2.length) return false;

  // Any rotation of string2 will be included in string1 + string1
  let repeat = string1 + string1; 
  return repeat.includes(string2);
}

console.log(stringRotation('waterbottle', 'erbottlewat'));