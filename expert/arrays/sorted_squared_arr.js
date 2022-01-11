// 3."Sorted Squared Array"
/**
Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.
 * 
 * Sample Input:
 * array = [1, 2, 3, 5, 6, 8, 9];
 * 
 * Sample Output:
 * [1, 4, 9, 25, 36, 64, 81];
 */

// O(nlogn) time | O(n) space - where n is the length of the input array
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}
exports.sortedSquaredArray = sortedSquaredArray;
