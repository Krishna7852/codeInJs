/**
 * Disk Stacking
You're given a non-empty array of arrays where each subarray holds three integers and
represents a disk. These integers denote each disk's width, depth, and height, respectively. Your
goal is to stack up the disks and to maximize the total height of the stack. A disk must have a
strictly smaller width, depth, and height than any other disk below it.
Write a function that returns an array of the disks in the final stack, starting with the top disk and
ending with the bottom disk. Note that you can't rotate disks; in other words, the integers in each
subarray must represent [width, depth, height] at all times.
You can assume that there will only be one stack with the greatest total height.
Sample Input
disks = [[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]]
Sample Output
[[2, 1, 2], [3, 2, 3], [4, 4, 5]]
// 10 (2 + 3 + 5) is the tallest height we can get by
// stacking disks following the rules laid out above.
 */

// O(n^2) time | O(n) space
function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
  const heights = disks.map((disk) => disk[2]);
  const sequences = new Array(disks.length);
  let maxHeightIdx = 0;
  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i];
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j];
      if (areValidDimensions(otherDisk, currentDisk)) {
        if (heights[i] <= currentDisk[2] + heights[j]) {
          heights[i] = currentDisk[2] + heights[j];
          sequences[i] = j;
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i;
  }
  return buildSequence(disks, sequences, maxHeightIdx);
}
function areValidDimensions(o, c) {
  return o[0] < c[0] && o[1] < c[1] && o[2] < c[2];
}
function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
}
console.log(
  'diskStacking:--',
  diskStacking([
    [2, 1, 2],
    [3, 2, 3],
    [2, 2, 8],
    [2, 3, 4],
    [1, 3, 1],
    [4, 4, 5],
  ])
);
//    exports.diskStacking = diskStacking;
