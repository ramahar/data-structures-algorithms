// Given two strings, write a method to decide if one is a permutation of the other
function isPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  else {
    sortedStr1 = str1.split("").sort().join("");
    sortedStr2 = str1.split("").sort().join("");
    return sortedStr1 === sortedStr2;
  }
}
