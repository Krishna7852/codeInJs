/**
 * Binary Tree Diameter
Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree
is defined as the length of its longest path, even if that path doesn't pass through the root of the
tree.
A path is a collection of connected nodes in a tree, where no node is connected to more than two
other nodes. The length of a path is the number of edges between the path's first node and its last
node.
Each BinaryTree node has an integer value , a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None / null .
Sample Input
tree =    1
         / \
        3   2
       / \
      7   4
     /     \
    8       5
   /         \
  9           6
Sample Output
6 // 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6
// There are 6 edges between the
// first node and the last node
// of this tree's longest path.
 */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}
function getTreeInfo(tree) {
  if (tree === null) {
    return new TreeInfo(0, 0);
  }
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);
  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
  return new TreeInfo(currentDiameter, currentHeight);
}
class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;

// -----------------------------Test-----------------------------------
const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);
const expected = 6;
const actual = binaryTreeDiameter(root);
console.log('actual::', actual);
