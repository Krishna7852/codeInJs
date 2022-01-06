// Interview question about group anagram answer in javascript

// input: ['tea','you', 'eat', 'ate', 'ouy', 'hard']
// output: [
//     ['tea', 'eat', 'ate'],
//     ['you', 'ouy'],
//     ['hard']
// ]

function groupAnagram(arr) {
    // we will put result here
    const output = {};
    
    // normalize word to get the similarity among all word
    let normalizeWord = (word) => word.split('').sort().join('');
    
    // iterate the array input
    arr.forEach((x) => {
      // if key exist in output
      output[normalizeWord(x)]
        // push the value
        ? output[normalizeWord(x)].push(x)
        // else give a new key and value to output
        : (output[normalizeWord(x)] = [x]);
    });
  
    // finally, get all output values with Object.values() method
    console.log(Object.values(output));
  }
  groupAnagram(['tea','you', 'eat', 'ate', 'ouy', 'hard']);