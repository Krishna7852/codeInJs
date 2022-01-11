/**
 * Validate Three Nodes
You're given three nodes that are contained in the same Binary Search Tree: nodeOne
, nodeTwo , and nodeThree . Write a function that returns a boolean representing
whether one of nodeOne or nodeThree is an ancestor of nodeTwo and the other
node is a descendant of nodeTwo . For example, if your function determines that
nodeOne is an ancestor of nodeTwo , then it needs to see if nodeThree is a
descendant of nodeTwo . If your function determines that nodeThree is an
ancestor, then it needs to see if nodeOne is a descendant.
A descendant of a node N is defined as a node contained in the tree rooted at N . A
node N is an ancestor of another node M if M is a descendant of N .
It isn't guaranteed that nodeOne or nodeThree will be ancestors or descendants of
nodeTwo , but it is guaranteed that all three nodes will be unique and will never be
None / null . In other words, you'll be given valid input nodes.
Each BST node has an integer value , a left child node, and a right child
node. A node is said to be a valid BST node if and only if it satisfies the BST property:
its value is strictly greater than the values of every node to its left; its value is less
than or equal to the values of every node to its right; and its children nodes are either
valid BST nodes themselves or None / null .

Sample Input
tree =    5
        /   \
       2     7
     /  \    / \
    1    4  6   8
   /    /
  0    3
// // This tree won't actually be passed as an input; it's here to help you visualize the problem.
nodeOne = 5 // The actual node with value 5.
nodeTwo = 2 // The actual node with value 2.
nodeThree = 3 // The actual node with value 3.

Sample Output = true
//  nodeOne is an ancestor of nodeTwo, and nodeThree is a descendant of nodeTwo.
 */

// Solution 1

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(h) time | O(h) space - where h is the height of the tree
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);
  if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);
  return false;
}
// Whether the `target` is a descendant of the `node`.
function isDescendant(node, target) {
  if (node === null) return false;
  if (node === target) return true;
  return target.value < node.value
    ? isDescendant(node.left, target) // This is an input class. Do not edit.
    : class BST {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
        }
      };
  // O(h) time | O(h) space - where h is the height of the tree
  function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);
    if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);
    return false;
  }
  // Whether the `target` is a descendant of the `node`.
  function isDescendant(node, target) {
    if (node === null) return false;
    if (node === target) return true;
    return target.value < node.value
      ? isDescendant(node.left, target)
      : isDescendant(node.right, target);
  }
}

exports.validateThreeNodes = validateThreeNodes;
exports.BST = BST;

//Solution 2
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(h) time | O(1) space - where h is the height of the tree
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);
  if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);
  return false;
}
// Whether the `target` is a descendant of the `node`.
function isDescendant(node, target) {
  while (node !== null && node !== target) {
    node = target.value < node.value ? node.left : node.right;
  }
  return node === target;
}
exports.validateThreeNodes = validateThreeNodes;
exports.BST = BST;
