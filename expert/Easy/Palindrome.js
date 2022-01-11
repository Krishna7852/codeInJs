// ------ Recursion: Palindrome Word ---------//

/**
 Create a recursive function that determines whether a word is a palindrome or not.

Examples
isPalindrome("madam") ➞ true

isPalindrome("adieu") ➞ false

isPalindrome("rotor") ➞ true
Notes
All inputs are in lowercase.
You are expected to solve this challenge via recursion.
You can check on the Resources tab for more details about recursion.
 */

// 1. Normal Way
const isPalindromeWay1 = (str) => {
  let allLowercase = str.toLowerCase();
  let charArr = allLowercase.split('');
  let dict = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let formattedChars = [];

  charArr.forEach((char) => {
    if (dict.includes(char)) formattedChars.push(char);
  });

  return formattedChars.join('') === formattedChars.reverse().join('');
};

isPalindromeWay1("Masdam I'm Adam");

// 2. Recursivelly
const isPalindrome = (query) => {
  return (
    !query ||
    (query[0] === query[query.length - 1] && isPalindrome(query.slice(1, -1)))
  );
};

// 3. Alternate way
// O(n^2) time | O(n) space
function isPalindrome(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}
console.log(isPalindrome("Madam I'm adam"));

// ["rascal", "racecar", "madam", "adieu", "radar", "rotor", "abacus", "rotator", "scholars"],
// [false, true, true, false, true, true, false, true, false]
