/**
 * Find Closest Value In BST
Write a function that takes in a Binary Search Tree (BST) and a target integer value and
returns the closest value to that target value contained in the BST.
You can assume that there will only be one closest value.
Each BST node has an integer value , a left child node, and a right child node.
A node is said to be a valid BST node if and only if it satisfies the BST property: its
value is strictly greater than the values of every node to its left; its value is less
than or equal to the values of every node to its right; and its children nodes are either
valid BST nodes themselves or None / null .
Sample Input
tree = 10
       / \
      5   15
     / \  / \
    2  5 13 22
   / \
  1  14
target = 12
Sample Output
13
 */
// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}
function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
// This is the class of the input tree.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// // Average: O(log(n)) time | O(1) space
// // Worst: O(n) time | O(1) space
// function findClosestValueInBst(tree, target) {
//     return findClosestValueInBstHelper(tree, target, tree.value);
//    }
//    function findClosestValueInBstHelper(tree, target, closest) {
//     let currentNode = tree;
//     while (currentNode !== null) {
//     if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
//     closest = currentNode.value;
//     }
//     if (target < currentNode.value) {
//     currentNode = currentNode.left;
//     } else if (target > currentNode.value) {
//     currentNode = currentNode.right;
//     } else {
//     break;
//     }
//     }
//     return closest;
//    }
//    // This is the class of the input tree.
//    class BST {
//     constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     }
//    }
//    exports.findClosestValueInBst = findClosestValueInBst;
exports.findClosestValueInBst = findClosestValueInBst;

// Test Program

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
const expected = 13;
const actual = findClosestValueInBst(root, 12);
console.log('actual:', actual);
