// Min Height BST
/**
  Write a function that takes in a non-empty sorted array of distinct integers, constructs a 
  BST from the integers, and returns the root of the BST. the function should minimize the 
  height of the BST. You've been provided with a BST class that you'll have to use to construct 
  the BST. Each BST node has an integer value, a left child node, and a right child node. A node 
  is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly 
  greater than the values of every node to its left; its value is less than or equal to the values of 
  every node to its right; and its children nodes are either valid BST nodes themselves or None / null.
  A BST is valid if and only if all of its nodes are valid BST nodes.
  Note that the BST class already has an insert method which you can use if you want.
  
  Sample Input:
  array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
  Sample Output:            10       
                          /     \
                        2       14  
                      /   \    /   \
                     1     5 13    15         
                            \       \
                            7       22 
            // This is one example of a BST with min height
            // that you could create from the input array.
            // You could create other BSTs with min height
            // from the same array; for example:
                          10       
                       /     \
                      5      15    
                    /   \   /   \
                   2     7 13   22
                 /           \
                             14
 */

/**
 * Hints
 *
 * Hint 1:
 * In order for the BST to have the smallest height possible, it needs to be balanced; in other words,
 * it needs to have roughly the same number of nodes in its left subtree as in its right subtree.
 *
 * Hint 2:
 * How can you use the sorted nature of the input array to construct a balanced BST?
 *
 * Hint 3:
 * Grab the middle element of the array, and make that element be the root node of the BST. Then,
 * grab the middle element between the beginning of the array and the first middle element, and make
 * that element be the root of the BST's left subtree; similarly, make the middle element between the
 * end of the array and the first middle element be the root of the BST's right subtree. Continue this
 * approach until you run out of elements in the array.
 *
 * Optimal Space & Time Complexity:
 * O(n) time | O(n) space - where n is the length of the array.
 */

/**
 Case 1:
   "array": [1, 2, 5, 7, 10, 13, 14, 15, 22]

Case 2:
"array": [1]

Case 3:
"array": [1, 2]

Case 4:
"array": [1, 2, 5]

Case 5:
"array": [1, 2, 5, 7]

Case 6:
"array": [1, 2, 5, 7, 10]

Case 7:
"array": [1, 2, 5, 7, 10, 13]

Case 8:
 "array": [1, 2, 5, 7, 10, 13, 14]

Case 9:
  "array": [1, 2, 5, 7, 10, 13, 14, 15]

Case 10:
  "array": [1, 2, 5, 7, 10, 13, 14, 15, 22]

Case 11:
  "array": [1, 2, 5, 7, 10, 13, 14, 15, 22, 28]
 */

// O(nlog(n)) time | O(n) space - where n is the length of the array
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

exports.minHeightBst = minHeightBst;
// -----------------------------Test-----------------------------------

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function getTreeHeight(tree, height = 0) {
  if (tree === null) return height;
  const leftTreeHeight = getTreeHeight(tree.left, height + 1);
  const rightTreeHeight = getTreeHeight(tree.right, height + 1);
  return Math.max(leftTreeHeight, rightTreeHeight);
}
const array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
const tree = minHeightBst(array);

console.log('validateBst(tree):', validateBst(tree));
console.log('getTreeHeight(tree):', getTreeHeight(tree));

const inOrder = inOrderTraverse(tree, []);
const expected = [1, 2, 5, 7, 10, 13, 14, 15, 22];

console.log('inOrder Expected Like Above:', inOrder);
