/**
 * Largest Range
  
Write a function that takes in an array of integers and returns an array of
length 2 representing the largest range of integers contained in that array.

The first number in the output array should be the first number in the range,
while the second number should be the last number in the range.

A range of numbers is defined as a set of numbers that come right after each
other in the set of real integers. For instance, the output array "[2, 6]"  represents the range {2, 3, 4, 5, 6}, which
is a range of length 5. Note that numbers don't need to be sorted or adjacent
in the input array in order to form a range.

You can assume that there will only be one largest range.

Sample Input
array  = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]

Sample Output= [0, 7]
 */
// O(n) time | O(n) space
function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};
  for (const num of array) {
    nums[num] = true;
  }
  for (const num of array) {
    if (!nums[num]) continue;
    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}
largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);
