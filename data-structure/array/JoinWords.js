// --------- Connecting Words ----------- //
/**
 Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
joinWords(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

joinWords(["move", "over", "very"]) ➞ ["movery", 3]

joinWords(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

joinWords(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]

Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
 */

const joinWords = (arr) => {
  // a place to count the minimum number
  let count = [];
  // loop through the words
  let res = arr.map((el, index) => {
    // loop through the characters in the word
    for (let i = 0; i < el.length; i++) {
      // does the next word match a slice of the first word?
      let regex = new RegExp('^' + el.slice(i), 'i');
      // if there is a next word

      if (arr[index + 1]) {
        if (arr[index + 1].match(regex)) {
          // log the length of the slice
          count.push(el.slice(i).length);
          // skip to the next word, returning that slice to 'res'
          return el.slice(0, i);
        } else {
          // if there is no match
          // if we're at the end of the word, push the word
          if (el.length - 1 == i) {
            count.push(0);
            return el;
          }
        }
      } else {
        // if there isn't a next word
        return el;
      }
    }
  });
  // join the new array, return it and the smallest number
  return [res.join(''), Math.min(...count)];
};

// console.log(joinWords(['move', 'over', 'very'])); // ➞ ["movery", 3]
console.log(joinWords(['oven', 'envier', 'erase', 'serious'])); // ➞ ["ovenvieraserious", 2]
