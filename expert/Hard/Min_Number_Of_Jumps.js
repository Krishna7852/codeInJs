/**
 * Min Number Of Jumps
You're given a non-empty array of positive integers where each integer represents the
maximum number of steps you can take forward in the array. For example, if the
element at index 1 is 3 , you can go from index 1 to index 2 , 3 , or 4 .
Write a function that returns the minimum number of jumps needed to reach the final
index.
Note that jumping from index i to index i + x always constitutes one jump, no
matter how large x is.
Sample Input
array = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
Sample Output
4 // 3 --> (4 or 2) --> (2 or 3) --> 7 --> 3
 */
// O(n^2) time | O(n) space
function minNumberOfJumps(array) {
  const jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
      }
    }
  }
  return jumps[jumps.length - 1];
}
exports.minNumberOfJumps = minNumberOfJumps;
