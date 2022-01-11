/**
 * Maximize Expression
Write a function that takes in an array of integers and returns the largest possible value for the
expression array[a] - array[b] + array[c] - array[d] , where a , b , c , and d are
indices of the array and a < b < c < d .
If the input array has fewer than 4 elements, your function should return 0 .
Sample Input
array = [3, 6, 1, -3, 2, 7]
Sample Output
4
// Choose a = 1, b = 3, c = 4, and d = 5
// -> 6 - (-3) + 2 - 7 = 4
 */

// O(n^4) time | O(1) space - where n is the length of the array
function maximizeExpression(array) {
  if (array.length < 4) return 0;
  let maximumValueFound = -Infinity;
  for (let a = 0; a < array.length; a++) {
    const aValue = array[a];
    for (let b = a + 1; b < array.length; b++) {
      const bValue = array[b];
      for (let c = b + 1; c < array.length; c++) {
        const cValue = array[c];
        for (let d = c + 1; d < array.length; d++) {
          const dValue = array[d];
          const expressionValue = evaluateExpression(
            aValue,
            bValue,
            cValue,
            dValue
          );
          maximumValueFound = Math.max(expressionValue, maximumValueFound);
        }
      }
    }
  }
  return maximumValueFound;
}
function evaluateExpression(a, b, c, d) {
  return a - b + c - d;
}
exports.maximizeExpression = maximizeExpression;
