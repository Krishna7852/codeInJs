/**
 * Water Area
You're given an array of non-negative integers where each non-zero integer represents the height
of a pillar of width 1 . Imagine water being poured over all of the pillars; write a function that
returns the surface area of the water trapped between the pillars viewed from the front. Note that
spilled water should be ignored.
You can refer to the first three minutes of this question's video explanation for a visual example.
Sample Input
heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
Sample Output
48
// Below is a visual representation of the sample input.
// The dots and vertical lines represent trapped water and pillars, respect
// Note that there are 48 dots.
// |
// |
// |.....|
// |.....|
// |.....|
// |..|..|
// |..|..|
// |..|..|.....|
// |..|..|.....|
// _|..|..|..||.|
 */

// Solution 1
// O(n) time | O(n) space - where n is the length of the input array
function waterArea(heights) {
  const maxes = new Array(heights.length).fill(0);
  let leftMax = 0;
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, height);
  }
  let rightMax = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];
    const minHeight = Math.min(rightMax, maxes[i]);
    if (height < minHeight) {
      maxes[i] = minHeight - height;
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(rightMax, height);
  }
  return maxes.reduce((a, b) => a + b, 0);
}

// Solution 2
// O(n) time | O(1) space - where n is the length of the input array
function waterAreaAlternative(heights) {
  if (heights.length === 0) return 0;
  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let leftMax = heights[leftIdx];
  let rightMax = heights[rightIdx];
  let surfaceArea = 0;
  while (leftIdx < rightIdx) {
    if (heights[leftIdx] < heights[rightIdx]) {
      leftIdx++;
      leftMax = Math.max(leftMax, heights[leftIdx]);
      surfaceArea += leftMax - heights[leftIdx];
    } else {
      rightIdx--;
      rightMax = Math.max(rightMax, heights[rightIdx]);
      surfaceArea += rightMax - heights[rightIdx];
    }
  }
  return surfaceArea;
}
console.log(
  'waterArea::--',
  waterAreaAlternative([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3])
);
