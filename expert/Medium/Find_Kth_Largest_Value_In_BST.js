/**
 * Find Kth Largest Value In BST
Write a function that takes in a Binary Search Tree (BST) and a positive integer k
and returns the kth largest integer contained in the BST.
You can assume that there will only be integer values in the BST and that k is less
than or equal to the number of nodes in the tree.
Also, for the purpose of this question, duplicate integers will be treated as distinct
values. In other words, the second largest value in a BST containing values
{5, 7, 7} will be 7 —not 5 .
Each BST node has an integer value , a left child node, and a right child
node. A node is said to be a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every node to its left; its
value is less than or equal to the values of every node to its right; and its children
nodes are either valid BST nodes themselves or None / null .
Sample Input
tree = 15
       / \
      5  20
     / \  / \
    2  5 17 22
   / \
  1   3
k = 3
Sample Output
17
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time | O(n) space - where n is the number of nodes in the tree
function findKthLargestValueInBst(tree, k) {
  const sortedNodeValues = [];
  inOrderTraverse(tree, sortedNodeValues);
  return sortedNodeValues[sortedNodeValues.length - k];
}
function inOrderTraverse(node, sortedNodeValues) {
  if (node === null) return;
  inOrderTraverse(node.left, sortedNodeValues);
  sortedNodeValues.push(node.value);
  inOrderTraverse(node.right, sortedNodeValues);
}
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;

// ------------------------------Test----------------------------------

const root = new BST(15);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.left.right = new BST(3);
root.left.right = new BST(5);
root.right = new BST(20);
root.right.left = new BST(17);
root.right.right = new BST(22);
const k = 3;
const expected = 17;
const actual = findKthLargestValueInBst(root, k);
console.log('Expected 17:--', actual);
