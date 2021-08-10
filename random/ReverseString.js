// Reverse string

// Note:
// - Dont use Array.reverse()
// - Entire string should not be reversed directly, only reverse the words to the string
//  .i.e.  Code in js // edoC ni sj

function reverseWords(string) {
  let wordsArr = string.split(' ');
  let reversedWordsArr = [];

  wordsArr.forEach((word) => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}

reverseWords('Coding JavaScript');
