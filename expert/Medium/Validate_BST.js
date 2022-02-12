/**
 * Validate BST
Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a
boolean representing whether the BST is valid.
Each BST node has an integer value , a left child node, and a right child node. A
node is said to be a valid BST node if and only if it satisfies the BST property: its value is
strictly greater than the values of every node to its left; its value is less than or equal to the
values of every node to its right; and its children nodes are either valid BST nodes
themselves or None / null .
A BST is valid if and only if all of its nodes are valid BST nodes.
Sample Input
tree = 10
       / \
      5   15
    / \   / \
   2   5 13 22
 / \
1   14
Sample Output
true
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time | O(d) space
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}
function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
exports.BST = BST;
exports.validateBst = validateBst;

// ------------------------------- Test---------------------------------
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

console.log('Expected True:', validateBst(root));
