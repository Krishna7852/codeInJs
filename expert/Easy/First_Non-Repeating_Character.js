/**
 * First Non-Repeating Character
Write a function that takes in a string of lowercase English-alphabet letters and
returns the index of the string's first non-repeating character.
The first non-repeating character is the first character in a string that occurs
only once.
If the input string doesn't have any non-repeating characters, your function
should return -1 .
Sample Input
string = "abcdcaf"
Sample Output
Optimal Space & Time Complexity
1 // The first non-repeating character is "b" and is found
 */

// Solution 1
// O(n^2) time | O(1) space - where n is the length of the i
function firstNonRepeatingCharacter(string) {
  for (let idx = 0; idx < string.length; idx++) {
    let foundDuplicate = false;
    for (let idx2 = 0; idx2 < string.length; idx2++) {
      if (string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true;
    }
    if (!foundDuplicate) return idx;
  }
  return -1;
}

//    Alternate Solution
// O(n) time | O(1) space - where n is the length of the inp
// The constant space is because the input string only has l
// English-alphabet letters; thus, our hash table will never
// than 26 character frequencies.
function firstNonRepeatingCharacter(string) {
  const characterFrequencies = {};
  for (const character of string) {
    if (!(character in characterFrequencies))
      characterFrequencies[character] = 0;
    characterFrequencies[character]++;
  }
  for (let idx = 0; idx < string.length; idx++) {
    const character = string[idx];
    if (characterFrequencies[character] === 1) return idx;
  }
  return -1;
}
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
