/**
 * Find Successor
Write a function that takes in a Binary Tree (where nodes have an additional pointer to their
parent node) as well as a node contained in that tree and returns the given node's successor.
A node's successor is the next node to be visited (immediately after the given node) when
traversing its tree using the in-order tree-traversal technique. A node has no successor if it's the
last node to be visited in the in-order traversal.
If a node has no successor, your function should return None / null .
Each BinaryTree node has an integer value , a parent node, a left child node, and a
right child node. Children nodes can either be BinaryTree nodes themselves or None /
null .
Sample Input
tree =
                1
               / \
              2   3
             / \
            4   5
           /
          6
node = 5
Sample Output
1
// This tree's in-order traversal order is:
// 6 -> 4 -> 2 -> 5 -> 1 -> 3
// 1 comes immediately after 5.
 */
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// O(n) time | O(n) space - where n is the number of nodes in the tree
function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
  for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const currentNode = inOrderTraversalOrder[idx];
    if (currentNode !== node) continue;
    if (idx === inOrderTraversalOrder.length - 1) return null;
    return inOrderTraversalOrder[idx + 1];
  }
}
function getInOrderTraversalOrder(node, order = []) {
  if (node === null) return order;
  getInOrderTraversalOrder(node.left, order);
  order.push(node);
  getInOrderTraversalOrder(node.right, order);
  return order;
}
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;

//    ---------------------------------------Test---------------------------------------

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.parent = root;
root.right = new BinaryTree(3);
root.right.parent = root;
root.left.left = new BinaryTree(4);
root.left.left.parent = root.left;
root.left.right = new BinaryTree(5);
root.left.right.parent = root.left;
root.left.left.left = new BinaryTree(6);
root.left.left.left.parent = root.left.left;
const node = root.left.right;
const expected = root;
const actual = findSuccessor(root, node);
console.log('actual::', actual);
