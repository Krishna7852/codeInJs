// 1. Max Subset Sum No Adjacent

/**
 * Write a function that takes in an array of positive integers and returns
 * the maximum sum of non-adjacent elements in the array. If the input array is empty,
 * the function should return 0.
 * Sample Input:
 * array = [75, 105, 120, 75, 90, 135];
 * Sample Output: 330 // 75 + 120 + 135;
 */
/**
 * "Hints:
 *
 * Hint 1:
 * Try building an array of the same length as the input array. At each index in this new
 * array, store the maximum sum that can be generated using no adjacent numbers located between
 * index 0 and the current index.
 *
 * Hint 2:
 * Can you come up with a formula that relates the max sum at index i to the max sums at indices
 * i - 1 and i - 2?.
 *
 * Hint 3:
 * Do you really need to store the entire array mentioned in Hint #1, or can you somehow store just
 * the max sums that you need at any point in time?
 *
 * Optimal Space & Time Complexity:
 * O(n) time | O(1) space - where n is the length of the input array;
 */
function maxSubsetSumNoAdjacent(array) {
  // Write your code here.

  if (!array.length) return 0;
  if (array.length === 1) array[0];
  let maxSums = [array[0]];
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const aa = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    console.log(aa);
  }
  console.log(maxSums);
  return maxSums;
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));

// exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
