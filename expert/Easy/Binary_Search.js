/**
 * Binary Search
Write a function that takes in a sorted array of integers as well as a target
integer. The function should use the Binary Search algorithm to
determine if the target integer is contained in the array and should
return its index if it is, otherwise -1 .
If you're unfamiliar with Binary Search, we recommend watching the
Conceptual Overview section of this question's video explanation before
starting to code.
Sample Input
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33
Sample Output
3
 */

// O(log(n)) time | O(log(n)) space
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}
function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];
  if (target === potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

// Alternate Solution
// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}
function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
//    console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
exports.binarySearch = binarySearch;
