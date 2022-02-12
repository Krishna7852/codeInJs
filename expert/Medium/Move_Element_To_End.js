/**
 * Move Element To End
You're given an array of integers and an integer. Write a function that moves all instances of that
integer in the array to the end of the array and returns the array.
The function should perform this in place (i.e., it should mutate the input array) and doesn't need
to maintain the order of the other integers.
Sample Input
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
Sample Output
Optimal Space & Time Complexity
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered diffe
 */
// O(n) time | O(1) space - where n is the length of the array
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }
  return array;
}
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
exports.moveElementToEnd = moveElementToEnd;
