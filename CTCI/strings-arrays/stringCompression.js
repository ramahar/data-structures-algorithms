// Implement a method to perform basic string compression using the counts of repeated 
// characters. For example, the string aabcccccaaa would become a2blc5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. You can assume the string has 
// only uppercase and lowercase letters (a - z).

// Find all instances of a character, store its count, and store in result 
function stringCompression(string) {
  let result = "";
  let letter = string[0];
  let counter = 1;

  for (let i = 1; i < string.length; i++) {
    let char = string[i];

    if (letter === char) {
      // Increment character count if match found 
      counter++;
    } else {
      // Add letter and its count to result 
      result += letter + counter;
      // Move to next character and reset counter for new char
      letter = char;
      counter = 1;
    }
  }
  return result + letter + counter;
}

console.log(stringCompression('aabcccccaaa'));