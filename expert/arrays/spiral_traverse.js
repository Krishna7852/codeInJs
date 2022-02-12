// 10.Spiral Traverse

/**
 * Write a function that takes in an n x m two-dimensional array 
 * (that can be square-shaped when n == m) and returns a one-dimensional array of all 
 * the array's elements in spiral order.Spiral order starts at the top left corner 
 * of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all 
 * the way until every element has been visited.
 * 
 Sample Input:
 array = [
 [1,   2,  3, 4]
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
];
Sample Output:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]:
 */

/**
 * Hints
 *
 * Hint 1:
 * You can think of the spiral that you have to traverse as a set of rectangle perimeters
 * that progressively get smaller (i.e., that progressively move inwards in the two-dimensional array).
 *
 * Hint 2:Going off of Hint #1, declare four variables: a starting row, a starting column,
 * an ending row, and an ending column. These four variables represent the bounds of the
 * first rectangle perimeter in the spiral that you have to traverse. Traverse that perimeter
 * using those bounds, and then move the bounds inwards. End your algorithm once the starting row passes
 * the ending row or the starting column passes the ending column.
 *
 * Hint 3:
 * You can solve this problem both iteratively and recursively following very similar logic.
 *
 * Optimal Space & Time Complexity:
 * O(n) time | O(n) space - where n is the total number of elements in the array.
 */

/**
 * 
 Case 1:
  "array": [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]

  Case 2:
  "array": [
    [1]
  ]

  Case 3:
    "array": [
    [1, 2],
    [4, 3]
  ]

  Case 4:
  "array": [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]

  Case 5:
    "array": [
    [19, 32, 33, 34, 25, 8],
    [16, 15, 14, 13, 12, 11],
    [18, 31, 36, 35, 26, 9],
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [17, 30, 29, 28, 27, 10]
  ]

  Case 6:
    "array": [
    [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
    [12, 19, 15, 16, 20, 18, 13, 17, 11, 14]
  ]

 Case 7:
 "array": [
    [27, 12, 35, 26],
    [25, 21, 94, 11],
    [19, 96, 43, 56],
    [55, 36, 10, 18],
    [96, 83, 31, 94],
    [93, 11, 90, 16]
  ]

  Case 8:

    "array": [
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
  ]
 */
// O(n) time | O(n) space - where n is the total number of elements
function spiralTraverse(array) {
  const result = [];
  let startRow = 0,
    endRow = array.length - 1;
  let startCol = 0,
    endCol = array[0].length - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      // Handle the edge case when there's a single row
      // in the middle of the matrix. In this case, we don't
      // want to double-count the values in this row, which
      // we've already counted in the first for loop above.
      // See Test Case 8 for an example of this edge case.
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      // Handle the edge case when there's a single column
      // in the middle of the matrix. In this case, we don't
      // want to double-count the values in this column, which
      // we've already counted in the second for loop above.
      // See Test Case 9 for an example of this edge case.
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}
exports.spiralTraverse = spiralTraverse;
