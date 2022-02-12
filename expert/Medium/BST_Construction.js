/**
 * BST Construction
Write a BST class for a Binary Search Tree. The class should support:
Inserting values with the insert method.
Removing values with the remove method; this method should only remove the first
instance of a given value.
Searching for values with the contains method.
Note that you can't remove values from a single-node tree. In other words, calling the remove
method on a single-node tree should simply not do anything.
Each BST node has an integer value , a left child node, and a right child node. A node
is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly
greater than the values of every node to its left; its value is less than or equal to the values of
every node to its right; and its children nodes are either valid BST nodes themselves or None
/ null .

Sample Usage
// Assume the following BST has already been created:
 10
 / \
 5 15
 / \ / \
 2 5 13 22
 / \
1 14
// All operations below are performed sequentially.
insert(12): 10
 / \
 5 15
 / \ / \
 2 5 13 22
 / / \
 1 12 14
remove(10): 12
 / \
 5 15
 / \ / \
  2 5 13 22
 / \
 1 14
contains(15): true
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space
  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }
  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space
  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // This is a single-node tree; do nothing.
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
    return this;
  }
  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

exports.BST = BST;

// Test Program
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

root.insert(12);
console.log('Expected to 12:', root.right.left.left.value);

root.remove(10);
console.log('Expected False:', root.contains(10));

console.log('Expected True:', root.contains(15));
