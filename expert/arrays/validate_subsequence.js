// 2."Validate Subsequence"

/**
 * 
 Given two non-empty arrays of integers, write a function that determines 
whether the second array is a subsequence of the first one.
Given A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For instance,
the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. 
Note that a single number in an array and the array itself are both valid subsequences 
of the array.

 * Sample Input :
array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];

 * Sample Output; true
 *
 */
// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
    }
    return seqIdx === sequence.length;
   }
   exports.isValidSubsequence = isValidSubsequence;