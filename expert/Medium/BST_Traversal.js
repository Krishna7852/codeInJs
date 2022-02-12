/**
 * BST Traversal
Write three functions that take in a Binary Search Tree (BST) and an empty array, traverse the BST,
add its nodes' values to the input array, and return that array. The three functions should traverse
the BST using the in-order, pre-order, and post-order tree-traversal techniques, respectively.
If you're unfamiliar with tree-traversal techniques, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.
Each BST node has an integer value , a left child node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST property: its value is strictly
greater than the values of every node to its left; its value is less than or equal to the values of
every node to its right; and its children nodes are either valid BST nodes themselves or None /
null .
Sample Input
tree = 10
       / \
      5  15
     / \  \
    2  5  22
 /
1
array = []
Sample Output
inOrderTraverse: [1, 2, 5, 5, 10, 15, 22] // where the array is the input array
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22] // where the array is the input array
postOrderTraverse: [1, 2, 5, 5, 22, 15, 10] // where the array is the input array
 */

// O(n) time | O(n) space
function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}
// O(n) time | O(n) space
function preOrderTraverse(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}
// O(n) time | O(n) space
function postOrderTraverse(tree, array) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;

//    --------------------------------Test--------------------------------
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.right = new BST(22);
console.log('inOrderTraverse(root, []):', inOrderTraverse(root, []));
console.log('preOrderTraverse(root, []):', preOrderTraverse(root, []));
console.log('postOrderTraverse(root, []):', postOrderTraverse(root, []));
