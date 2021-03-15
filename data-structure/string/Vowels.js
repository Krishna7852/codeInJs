// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
// --- Examples
//    vowels('Hi There!') --> 3
//    vowels('Why do you ask?') --> 4
//    vowels('Why?') --> 0

const vowels = (query) => {
  const characters = [];
  const checker = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < query.length; i++) {
    if (checker.includes(query[i].toLowerCase())) {
      characters.push(query[i]);
    }
  }
  return characters.length;
};
console.log('vowel count::', vowels('krishna'));
// Alternate Approch:

const vowelsApproch2 = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
console.log('vowel count::', vowelsApproch2('Bhamare'));
