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

const isPalindrome = (query) => {
  console.log(query);
  return (
    !query ||
    (query[0] === query[query.length - 1] && isPalindrome(query.slice(1, -1)))
  );
};

console.log(isPalindrome('rotator'));

// ["rascal", "racecar", "madam", "adieu", "radar", "rotor", "abacus", "rotator", "scholars"],
// [false, true, true, false, true, true, false, true, false]
