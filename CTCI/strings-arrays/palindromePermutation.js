// Given a string, write a function to check if it is a permutation of a palindrome. 
function palindromePermutation(str) {
  let obj = {};
  let charCount = 0;

  // If number of characters is even, there must be 2 of every character
  // If odd, there is only one unique char
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // If character is not in object, set it to 0 then increment count
    if (char === ' ') continue;
    if (obj[char]) {
      delete obj[char];
    } else {
      obj[char] = true;
    }
    charCount++;
  }

  // Check object at the end. Odd -> 1 key left, even -> no keys left
  if (charCount % 2 === 0) {
    return Object.keys(obj).length === 0;
  } else {
    return Object.keys(obj).length === 1;
  }
}

console.log(palindromePermutation("Tact Coa"))