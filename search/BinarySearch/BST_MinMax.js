// -------------- Minimum and Maximum Value in BST ------------- //

/**
 * Given a Binary Search Tree (BST) implementation, complete the minimum,
 * and maximum function which is present in the BST class. Here you have to
 * find the max value, min value of the whole tree.
 */

/**
  Examples: 

data = [10, 4 , 20 , 1 , 5]

maximum()  ➞ 20
      10
      /   \
    4    20
  /  \
1    5

data = [100, 70, 200, 34, 80, 300]

minimum() ➞ 34

       100
       /    \
    70    200
  /    \          \
34   80      300

*/

// Notes:
// Maximum and Minimum value of the whole tree.

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(element) {
    const node = new Node(element);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  minimum() {
    let current = this.root;
    if (!current) {
      return '';
    }
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }
  maximum() {
    let current = this.root;
    if (!current) {
      return '';
    }
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

const bst = new BST();
bst.insert(20);
bst.insert(4);
bst.insert(6);
bst.insert(5);
bst.maximum();
console.log(bst);
