/**
 * Reconstruct BST
The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node
and visits nodes in the following order:
1. Current node
2. Left subtree
3. Right subtree
Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree
(BST), write a function that creates the relevant BST and returns its root node.
The input array will contain the values of BST nodes in the order in which these nodes would be
visited with a pre-order traversal.
Each BST node has an integer value , a left child node, and a right child node. A node
is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly
greater than the values of every node to its left; its value is less than or equal to the values of
every node to its right; and its children nodes are either valid BST nodes themselves or None /
null .
Sample Input
preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]
Sample Output
        10
       /  \
     4     17
    / \     \
   2   5     19
 /   /
1  18 
 */

// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// O(n^2) time | O(n) space - where n is the length of the input array
function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null;
  const currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;
  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    const value = preOrderTraversalValues[idx];
    if (value >= currentValue) {
      rightSubtreeRootIdx = idx;
      break;
    }
  }
  const leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  const rightSubtree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeRootIdx)
  );
  return new BST(currentValue, leftSubtree, rightSubtree);
}

exports.BST = BST;
exports.reconstructBst = reconstructBst;


// ------------------------------Test the Program----------------------------------
function getDfsOrder(node, values) {
    if (node === null) return;
    values.push(node.value);
    getDfsOrder(node.left, values);
    getDfsOrder(node.right, values);
    return values;
  }
  
const preOrderTraversalValues = [10, 4, 2, 1, 3, 17, 19, 18];
const tree = new BST(10);
tree.left = new BST(4);
tree.left.left = new BST(2);
tree.left.left.left = new BST(1);
tree.left.right = new BST(3);
tree.right = new BST(17);
tree.right.right = new BST(19);
tree.right.right.left = new BST(18);
const expected = getDfsOrder(tree, []);
const actual = reconstructBst(preOrderTraversalValues);
const actualDfsOrder = getDfsOrder(actual, []);
console.log('actualDfsOrder::', actualDfsOrder);