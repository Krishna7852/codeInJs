// Caesar cipher

// Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques.

// The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions. For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):

// Plain	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
// Cipher	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W
// When encrypting, a person looks up each letter of the message in the "plain" line and writes down the corresponding letter in the "cipher" line.

// Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
// Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD

function caesarCipher(str, num) {
  // If we pass the number which is more than directory length , then its required handle the case.
  num = num % 26;
  let allLowercase = str.toLowerCase();
  let dict = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let charArr = allLowercase.split('');

  let encreptedStr = '';
  for (let i = 0; i < charArr.length; i++) {
    // check for special character, space etc.
    if (!dict.includes(charArr[i])) {
      encreptedStr += charArr[i];
      continue;
    }
    let currentIndex = dict.indexOf(charArr[i]);
    let newIndex = currentIndex + num;
    // If the element is the last in the dictionary, then start from begining.
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }

    //  To handle the negative num. ie. cieaserCipher('Javascript', -900)
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    // Add Capitalize in the encrepted string.
    if (str[i] === charArr[i].toUpperCase()) {
      encreptedStr += dict[newIndex].toUpperCase();
      continue;
    }
    encreptedStr += dict[newIndex];
  }
  return encreptedStr;
}

console.log(caesarCipher('Krishna Bhamare', 2));
