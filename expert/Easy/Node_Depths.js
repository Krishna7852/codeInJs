/**
 * Node Depths
The distance between a node in a Binary Tree and the tree's root is called the node's depth.
Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
Each BinaryTree node has an integer value , a left child node, and a right child
node. Children nodes can either be BinaryTree nodes themselves or None / null .
Sample Input
tree = 1
      / \
      2 3
    / \ / \
    4 5 6 7
   / \
   8 9
Sample Output
16
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc..
// Summing all of these depths yields 16.
 */

// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//    Alternate Soln
// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in
// the Binary Tree and h is the height of the Binary Tree
/**
 function nodeDepths(root, depth = 0) {
    if (root === null) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
   }
   // This is the class of the input binary tree.
   class BinaryTree {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
   }
 */
exports.nodeDepths = nodeDepths;
const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
const actual = nodeDepths(root);
console.log('actual:', actual);
