/**
 * Invert Binary Tree
Write a function that takes in a Binary Tree and inverts it. In other words, the function should
swap every left node in the tree for its corresponding right node.
Each BinaryTree node has an integer value , a left child node, and a right child
node. Children nodes can either be BinaryTree nodes themselves or None / null .
Sample Input
tree = 1
      / \
     2   3
    / \ / \
   4  5 6  7
 / \
8   9
Sample Output
     1
    / \
   3   2
  / \ / \
 7  6 5  4
        / \
       9   8
 */

// O(n) time | O(n) space
function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    swapLeftAndRight(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}
function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }

  invertedInsert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
    }
    this.invertedInsert(values, i + 1);
    return this;
  }
}
exports.invertBinaryTree = invertBinaryTree;

//    ------------------------------Test----------------------------------

const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
const invertedTree = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8, 9]);
invertBinaryTree(tree);
console.log('invertedTree::', invertedTree);
