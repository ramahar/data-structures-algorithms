// create a hash to store letters as keys & numbers as values 
// iterate through string, the first char is a letter
// keep a counter for the number values and to check for > 1 digit numbers; if next char is not a # then put it in the hash
// convert num str into int and add values in hash 
function betterCompression(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  let currentChar = "", numbers = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let nextChar = i + 1;
    // Add characters and their counts to object 
    if ((alphabet.includes(char)) && (!(obj[char]))) {
      obj[char] = 0;
      currentChar = char;
    } else if (obj[char]) {
      currentChar = char;
    } else {
      // If character is a number, add it to result 
      if (Number.isInteger(parseInt(s[nextChar]))) {
        numbers += parseInt(char);
      } else {
        numbers += char;
        obj[currentChar] += parseInt(numbers);
        numbers = "";
      }
    }
  }

  let result = [];
  let entries = Object.entries(obj);
  // Sort the string in alphabetical order 
  entries.sort(function (a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  // Arrange array such that character count appears next to character 
  for (let j = 0; j < entries.length; j++) {
    let sub = entries[j];
    sub[1] = String(sub[1]);
    result.push(sub.join(""));
  }
  return result.join("");
}

console.log(betterCompression("a12c56a1b5"))


// const betterCompression = (s) => {
//   let obj = {};
//   let letters = [], numbers = [];
//   let number = '', result = '';

//   for (let i = 0; i < s.length; i++) {
//     if (isLetter(s[i])) {
//       if (number.length >= 1) {
//         numbers.push(parseInt(number))
//       }
//       letters.push(s[i])
//       number = '';
//     } else {
//       number += s[i];
//     }
//   }
//   numbers.push(parseInt(number))

//   for(let j = 0; j < numbers.length; j++) {
//     obj[letters[j]] = 0;
//   }

//   for(let k = 0; k < numbers.length; k++) {
//     obj[letters[k]] += numbers[k];
//   }
  
//   let charKeys = Object.keys(obj);
//   let charVals = Object.values(obj);

//   for (let l = 0; l < charKeys.length; l++) {
//     result += (charKeys[l] + charVals[l]);
//   }
//   return result;
// }

// const isLetter = (letter) => {
//   if (letter >= 'a' && letter <= 'z') return true;
//   else return false;
// }
