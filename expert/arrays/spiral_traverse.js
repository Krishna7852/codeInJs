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
function spiralTraverse(array) {
  // Write your code here.
}

exports.spiralTraverse = spiralTraverse;
