// Reverse array

// Note:
// - Be sure to manipulate the array passed in.
// - DO NOT push elements to the new array and return that array.

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;

    // In short way: [a,b] = [b,a];
    // [arr[i],arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i],arr[i]];
  }

  return arr;
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);
